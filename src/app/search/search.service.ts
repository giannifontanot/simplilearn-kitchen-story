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

  constructor(private http: HttpClient) {  }

  getFoods(): Observable<IFood[]> {
    return this.http.get<IFood[]>(this.foodUrl).pipe(
    tap(data=>console.log('All', JSON.stringify(data))),
    catchError(this.handleError)
    );

  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

