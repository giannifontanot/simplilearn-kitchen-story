import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SearchComponent} from './search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './cart/checkout.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SearchComponent,
        CartComponent,
        CheckoutComponent,
        InventoryComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'login', component: LoginComponent},
            {path: 'inventory', component: InventoryComponent},
            {path: 'search', component: SearchComponent},
            {path: 'cart', component: CartComponent},
            {path: 'checkout', component: CheckoutComponent},
        ]),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}


