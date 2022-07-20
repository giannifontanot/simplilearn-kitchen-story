import {Injectable} from '@angular/core';
import {IFood} from "./food";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  foodUrl: string = 'api/foods/foods.json';

  constructor() {
  }

  getFoods(): IFood[] {
    return [
      {
        "foodId": 2,
        "foodName": "apples",
        "price": 1.2
      },
      {
        "foodId": 3,
        "foodName": "avocado",
        "price": 1.2
      },
      {
        "foodId": 4,
        "foodName": "alfalfa",
        "price": 2.7
      }
    ];
  }


}

