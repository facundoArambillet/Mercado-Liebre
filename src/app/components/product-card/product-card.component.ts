import { Component, Input, inject } from '@angular/core';
import { ProductImage } from 'src/app/models/product-image/product-image';
import { ProductOfferDTO } from 'src/app/models/product-offer/product-offer-dto';
import { ProductDTO } from 'src/app/models/product/product-dto';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductOfferService } from 'src/app/services/product-offer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: ProductDTO;
  @Input() redirectedByUserHistory!: boolean;
  private productImageService = inject(ProductImageService);
  private productOfferService = inject(ProductOfferService);

  //Este seria un atributo de cada producto y dependiendo si es true o false agregaria el "weekly deal"
  // isInWeeklyDeal: boolean = true;

  //Si tiene un descuento mostrarlo en la card(puede estar en oferta y no entrar en la oferta semanal)
  isInOffer: boolean = false;
  productOffer!: ProductOfferDTO;

  //Si tiene 0% y 0 cuotas en payment_plans significa que el pago es de contado
  isInCash: boolean = false;
  //Si tiene mas de 1 cuotas(minimo 2), con 0% de interes resalto el texto de las cuotas
  hasInterestFreeInstallments: boolean = false;

  productImage!: string;
  isDarkTheme: boolean = false;

  loadProductImage() {
    this.productImageService.getByIdProduct(this.product.idProduct).subscribe({
      next: (productImages: ProductImage[]) => {
        // Asigno la cadena Base64 a un string para que no me de ERROR_CONNECTION_431(long header)
        this.productImage = `data:image/png;base64,${productImages[0].image}`;
      }
    });
  }

  loadProductOffer() {
    this.productOfferService.getByIdProduct(this.product.idProduct).subscribe(
    {
      next: (productOfferDTO: ProductOfferDTO) => {
        if(productOfferDTO != null) {
          this.productOffer = productOfferDTO;
          this.isInOffer = !this.isInOffer;
        }
      },
      error: (error) => {
        console.log("Product offer: " + error.message);
      }
    }
    )
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
  deleteHistory(event: Event) {
    //Llamar endpoint de delete
    event.stopPropagation();
    console.log("btn delete");
  }
  ngOnInit() {
    this.loadProductOffer();
    this.loadProductImage();
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
