import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'search', component: SearchComponent},
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// TODO - SEARCH
// TODO -   use the http service to get the data from the json file
// TODO -     use a service to get the data
// TODO -     use subscribe,
// TODO -   select foods and send to the buying table
// TODO -   present the checkout list on screen
// TODO - LOGIN
// TODO -   verify user screen
