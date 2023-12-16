import { Component, inject } from '@angular/core';
import { ProductDTO } from 'src/app/models/product/product-dto';
import { ProductOfferService } from 'src/app/services/product-offer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-offerts',
  templateUrl: './product-offerts.component.html',
  styleUrls: ['./product-offerts.component.css']
})
export class ProductOffertsComponent {
  productOfferService = inject(ProductOfferService);
  productService = inject(ProductService);
  productsInOffer: ProductDTO[] = [];

  isDarkTheme: boolean = false;

  loadAnchorTheme() {
    let bodyTheme = document.querySelector("body")?.getAttribute("data-bs-theme");
    bodyTheme == "dark" ? this.isDarkTheme = true : this.isDarkTheme = false;
  }

  loadProductsInOffer() {
    this.productService.getProductsInOffer().subscribe(
      {
        next: (productsInOffer : ProductDTO[]) => {
          this.productsInOffer = productsInOffer;
        },
        error: (error) => {
          console.log("product offer: " + error.message);
        }
      }
    )
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
    this.loadProductsInOffer();
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
