import { Component } from '@angular/core';

@Component({
  selector: 'app-user-purchases',
  templateUrl: './user-purchases.component.html',
  styleUrls: ['./user-purchases.component.css']
})
export class UserPurchasesComponent {
  purchases: Number[] = new Array(4);
}
