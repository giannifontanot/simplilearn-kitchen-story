import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {InventoryService} from "../inventory/inventory.service";


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = this.formBuilder.group({
        id: '1',
        username: 'admin',
        password: 'xadminw'

    })

    constructor(private formBuilder: UntypedFormBuilder,
                private loginService: LoginService,
                private router: Router,
                private inventoryService: InventoryService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.loginService.submitLogin(this.loginForm.value).subscribe(
            {
                next: (data) => {
                    console.log(data)
                    this.inventoryService.admin = true;
                    this.router.navigate(["/inventory"])
                },
                error: (err => console.log(err))
            }
        )
    }

    onChangePassword() {
        this.router.navigate(["/changePassword"])

    }
}
