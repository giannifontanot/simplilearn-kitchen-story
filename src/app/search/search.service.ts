import {Injectable} from '@angular/core';
import {IFood} from "./food";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  foodUrl: string = 'api/foods.json';
  cart: IFood[] = [];
  absoluteTotal: number = 0;

  constructor(private http: HttpClient) {  }

  getFoods(): Observable<IFood[]> {
    return this.http.get<IFood[]>(this.foodUrl).pipe(
    tap(data=>console.log('All', JSON.stringify(data))),
    catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  addToCart(food: IFood){
    this.cart.push(food);

  }

  getCart(){
    return this.cart;
  }

  removeItem(food: IFood){

    let foodIdToDelete = (element: { foodId: number; }) => food.foodId === element.foodId;

    let index = this.cart.findIndex(foodIdToDelete)
    this.cart.splice(index,1)
  }

  getTotal(): number {
    this.absoluteTotal = 0;
    this.cart.forEach(item=> this.absoluteTotal += item.price)
    return this.absoluteTotal;
  }
}

