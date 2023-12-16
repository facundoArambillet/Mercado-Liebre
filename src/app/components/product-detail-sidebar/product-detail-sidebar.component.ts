import { Component, Input, inject } from '@angular/core';
import { ProductOfferDTO } from 'src/app/models/product-offer/product-offer-dto';
import { ProductDetailDTO } from 'src/app/models/product/product-detail-dto';
import { ShoppingCartDTO } from 'src/app/models/shopping-cart/shopping-cart-dto';
import { User } from 'src/app/models/user/user';
import { UserDetailDTO } from 'src/app/models/user/user-detail-dto';
import { ProductOfferService } from 'src/app/services/product-offer.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail-sidebar',
  templateUrl: './product-detail-sidebar.component.html',
  styleUrls: ['./product-detail-sidebar.component.css']
})
export class ProductDetailSidebarComponent {
  @Input() product!: ProductDetailDTO;
  @Input() seller!: UserDetailDTO;

  private productOfferService = inject(ProductOfferService);
  private shoppingCartService = inject(ShoppingCartService);

  idUser: number = 0;
  shoppingCart!: ShoppingCartDTO;
  isDarkTheme: boolean = false;
  productOffer!: ProductOfferDTO;
  
  //Si tiene un descuento mostrarlo en el sidebar
  isInOffer: boolean = false;
  //Este seria un atributo de cada producto y dependiendo si es true o false agregaria el "weekly deal"
  // isInWeeklyDeal: boolean = true;
  //Si tiene 0% y 0 cuotas en payment_plans significa que el pago es de contado
  isInCash: boolean = false;
  //Si tiene mas de 1 cuotas(minimo 2), con 0% de interes resalto el texto de las cuotas
  hasInterestFreeInstallments: boolean = true;


  unrealizeUser() {
    let userString = window.localStorage.getItem("User");
    let user!: User;
    if (userString !== null) {
      user = JSON.parse(userString);
      this.idUser = user.idUser;
    }
  }

  loadProductOffer() {
    if (this.product.weeklyOffer) {
      this.productOfferService.getByIdProduct(this.product.idProduct).subscribe({
        next: (productOffer: ProductOfferDTO) => {
          this.productOffer = productOffer;
          this.isInOffer = true;
          
        },
        error: (error) => {
          console.log("Error Load Products Offers: " + error.message);
        }
      })
    }

  }

  loadShoppingCart() {
    this.shoppingCartService.getByIdUser(this.idUser).subscribe(
      {
        next: (shoppingCart: ShoppingCartDTO) => {
          this.shoppingCart = shoppingCart;
        },
        error: (error) => {
          console.log("Error load shopping cart: " + error.message);
        }
      }
    )
  }

  insertProductInCart() {
    this.shoppingCartService.insertProduct(this.shoppingCart.idCart, this.product.idProduct).subscribe(
      {
        next: () => {
          Swal.fire({
            icon: "success",
            title: `Producto agregado con exito`,
            text: "El producto fue agregado con exito a su carrito de compras",
          });
        },
        error: (error) => {
          if(error.error.httpStatus === 'BAD_REQUEST') {
            Swal.fire({
              icon: "info",
              title: `Producto existente`,
              text: "El producto ya se encuentra en su carrito de compras",
            });
          }
          console.log(error.message);
          console.log(error.error);
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

  ngOnInit() {
    this.unrealizeUser();
    this.loadShoppingCart();
    this.loadProductOffer();
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
