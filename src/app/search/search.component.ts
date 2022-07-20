import {Component, OnDestroy, OnInit} from '@angular/core';
import {IFood} from "./food";
import {SearchService} from "./search.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  foodsFiltered: IFood[] = [];
  listFilter: string = 'apple';
  sub!: Subscription;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
   // foodsFiltered = food.foodName.toLowerCase().includes(this.listFilter.toLowerCase())

  }

  search() {
  //////  alert();
    this.foodsFiltered = this.searchService.getFoods().filter(
      food => food.foodName.toLowerCase().includes(this.listFilter.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
