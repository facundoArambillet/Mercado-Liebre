import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImage } from 'src/app/models/product-image/product-image';
import { ProductOfferDTO } from 'src/app/models/product-offer/product-offer-dto';
import { ProductDTO } from 'src/app/models/product/product-dto';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductOfferService } from 'src/app/services/product-offer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card-by-category-family',
  templateUrl: './product-card-by-category-family.component.html',
  styleUrls: ['./product-card-by-category-family.component.css']
})
export class ProductCardByCategoryFamilyComponent {
  @Input() product!: ProductDTO;
  private productImageService = inject(ProductImageService);
  private productOfferService = inject(ProductOfferService);
  isDarkTheme: boolean = false;

  productImage!: string;
  productOffer!: ProductOfferDTO;
  
  loadProductImage() {
    this.productImageService.getByIdProduct(this.product.idProduct).subscribe({
      next: (productImages: ProductImage[]) => {
        this.productImage = `data:image/png;base64,${productImages[0].image}`;
      }
    });
  }

  loadProductOffer() {
    if (this.product.weeklyOffer) {
      this.productOfferService.getByIdProduct(this.product.idProduct).subscribe({
        next: (productOffer: ProductOfferDTO) => {
          this.productOffer = productOffer;
        },
        error: (error) => {
          console.log("Error Load Products Offers product-card-by-category: " + error.message);
        }
      })
    }

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
    this.loadProductOffer();
    this.loadProductImage();
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
