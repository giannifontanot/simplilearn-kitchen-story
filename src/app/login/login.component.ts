import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  loginForm =this.formBuilder.group({
    username: '',
    password: ''

  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.submitLogin(this.loginForm.value).subscribe(
        {
          next: (data) =>{data},
          error: (err => console.log(err))
        }
    )
this.router.navigate(["/inventory"])
  }
}
