import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IFood} from "../model/food";
import {Subscription} from "rxjs";
import {InventoryService} from "./inventory.service";

@Component({
    selector: 'ks-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
    inventoryGroup = this.formBuilder.group({
        foodId: '1',
        foodName: 'abc',
        price: '5'
    })

    sub!: Subscription;
    errMsg!: string;
    foods: IFood[] = [];
    result: any;

    constructor(private formBuilder: FormBuilder,
                private inventoryService: InventoryService) {
    }

    onSubmit(): void {
        this.inventoryService.saveNewItem(this.inventoryGroup.value).subscribe({
            next: (data: any) => {
                const parsed = JSON.parse(JSON.stringify(data))
                let retVal: string = parsed.return
                if (retVal === ("OK")) {
                    alert("Item saved successfully.")
                    this.refreshList();
                } else {
                    alert("error: ");
                }
            },
            error: (error: any) => {
                alert("error: " + error.message)
            }
        });
    }

    onDelete(item: IFood) {
        this.inventoryService.deleteItem(item.foodId).subscribe({
            next: (data) => {
                const deleteOp = JSON.parse(JSON.stringify(data))
                let retVal = deleteOp.return
                if (retVal === ("OK")) {
                    alert("Item deleted successfully.")
                    this.refreshList();
                } else {
                    alert("error:")
                }
            },
            error: (error: any) => {
                alert("error: " + error.message)
            }
        });
    }

    ngOnInit(): void {
        this.refreshList();
    }

    refreshList(): void {
        this.sub = this.inventoryService.getFoods().subscribe({
            next: data => {
                this.foods = data
            },
            error: error => this.errMsg = error
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
