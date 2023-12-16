import { Component, inject } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-purchases',
  templateUrl: './user-purchases.component.html',
  styleUrls: ['./user-purchases.component.css']
})
export class UserPurchasesComponent {
  private productService = inject(ProductService);
  private invoiceService = inject(InvoiceService);
  
  purchases: Number[] = new Array(4);

  loadproducts() {

  }
}
