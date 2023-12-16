import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { ProductImage } from 'src/app/models/product-image/product-image';
import { ProductOfferDTO } from 'src/app/models/product-offer/product-offer-dto';
import { ProductDTO } from 'src/app/models/product/product-dto';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductOfferService } from 'src/app/services/product-offer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card-by-category',
  templateUrl: './product-card-by-category.component.html',
  styleUrls: ['./product-card-by-category.component.css']
})
export class ProductCardByCategoryComponent {
  @Input() product!: ProductDTO;
  private productImageService = inject(ProductImageService);
  private productOfferService = inject(ProductOfferService);
  isDarkTheme: boolean = false;

  //Si tiene 0% y 0 cuotas en payment_plans significa que el pago es de contado
  isInCash: boolean = false;
  // productImage!: string;
  productImage!: string;
  productOffer!: ProductOfferDTO;
  // productOffer: ProductOfferDTO = {
  //   idProductOffer: 0,
  //   discountPercentage: 0,
  //   total: 0,
  //   product: {
  //     idProduct: 0,
  //     name: '',
  //     price: 0,
  //     stock: 0,
  //     description: '',
  //     weeklyOffer: false,
  //     category: {
  //       idCategory: 0,
  //       name: '',
  //       categoryFamily: {
  //         idType: 0,
  //         type: '',
  //         image: new Uint8Array(),
  //       }
  //     },
  //     user: {
  //       idUser: 0,
  //       email: '',
  //       password: '',
  //       name: '',
  //       lastName: '',
  //       creationDate: new Date(),
  //       salesMade: 0,
  //       userRol: {
  //         idRol: 0,
  //         type: ''
  //       },
  //       products: []
  //     },
  //     users: [],
  //     productAttributes: [],
  //     paymentPlans: []
  //   }
  // };

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
