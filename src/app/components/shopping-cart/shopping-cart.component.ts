import { Component, inject } from '@angular/core';
import { ProductDetailDTO } from 'src/app/models/product/product-detail-dto';
import { ShoppingCartDTO } from 'src/app/models/shopping-cart/shopping-cart-dto';
import { User } from 'src/app/models/user/user';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  private shoppingCartService = inject(ShoppingCartService);
  private productService = inject(ProductService);
  products : ProductDetailDTO[] = [];
  idUser: number = 0;
  idShoppingCart: number = 0;
  shoppingCart!: ShoppingCartDTO;
  isDarkTheme: boolean = false;

  unrealizeUser() {
    let userString = window.localStorage.getItem("User");
    let user!: User;
    if (userString !== null) {
      user = JSON.parse(userString);
      this.idUser = user.idUser;
    }
  }

  loadShoppingCart() {
    this.shoppingCartService.getByIdUser(this.idUser).subscribe(
      {
        next: (shoppingCart: ShoppingCartDTO) => {
          this.shoppingCart = shoppingCart;
          this.idShoppingCart = shoppingCart.idCart
          this.loadProductsInCart(shoppingCart.idCart);
        },
        error: (error) => {
          console.log(error.error)
        }
      }
    )
  }

  loadProductsInCart(idCart: number) {
    this.productService.getProductsInShoppingCart(idCart).subscribe(
      {
        next: (products: ProductDetailDTO[]) => {
          this.products = products;
        },
        error: (error) => {
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
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
