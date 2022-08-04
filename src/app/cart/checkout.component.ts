import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search/search.service";
import {IFood} from "../model/food";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'ks-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    cart: IFood[] = []
    cartTotal = this.searchService.absoluteTotal

    constructor(private searchService: SearchService,
                private formBuilder: FormBuilder) {
    }
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

    ngOnInit(): void {
        this.cart = this.searchService.getCart()
    }

    onSubmit(){
      alert('submitted')
    }

}
