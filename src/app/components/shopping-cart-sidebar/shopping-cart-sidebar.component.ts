import { Component, Input } from '@angular/core';
import { ProductDetailDTO } from 'src/app/models/product/product-detail-dto';

@Component({
  selector: 'app-shopping-cart-sidebar',
  templateUrl: './shopping-cart-sidebar.component.html',
  styleUrls: ['./shopping-cart-sidebar.component.css']
})
export class ShoppingCartSidebarComponent {
  @Input() products!: ProductDetailDTO[];
  isDarkTheme: boolean = false;


  buyProducts() {
    //Hacer endpoint que use la API de mercado pago
    console.log("Buy");
  }

  loadAnchorTheme() {
    let bodyTheme = document.querySelector("body")?.getAttribute("data-bs-theme");
    bodyTheme == "dark" ? this.isDarkTheme = true : this.isDarkTheme = false;
  }

  observeTheme() {
    const targetNode = document.querySelector('body');
    const config = { attributes: true };
    const callback = (mutationList: any, observer: any) => {
      for (const mutation of mutationList) {
        if (mutation.type === "attributes") {
          if (mutation.attributeName === 'data-bs-theme') {
            this.loadAnchorTheme();
          }
        }
      }
    };

    const observer = new MutationObserver(callback);

    if (targetNode) {
      observer.observe(targetNode, config);
    }
  }

  ngOnInit() {
    this. loadAnchorTheme();
    this.observeTheme();
  }
}
