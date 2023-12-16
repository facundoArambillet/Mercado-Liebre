import { Component, inject } from '@angular/core';
import { ProductDetailDTO } from 'src/app/models/product/product-detail-dto';
import { ProductDTO } from 'src/app/models/product/product-dto';
import { User } from 'src/app/models/user/user';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private userService = inject(UserService);
  private productService = inject(ProductService);
  productsInWeeklyOffer: ProductDTO[] = [];
  productBasedInTheLastHistory: ProductDetailDTO[] = [];
  productBasedInTheLastCategoryFamily: ProductDTO[] = [];
  localStorage: Storage = window.localStorage;
  categoryFamilyLatest: string = "";
  categoryLatest: string = "";
  
  unrealizeUserName() {
    let userString = window.localStorage.getItem("User");
    let user!: User;
    if (userString !== null) {
      user = JSON.parse(userString);

      this.loadProductsBasedInTheLastHistory(user.idUser);
    }
  }

  loadProductsInWeeklyOffer() {
    this.productService.getProductsInWeeklyOffer().subscribe(
      {
        next: (productsInWeeklyOffer: ProductDTO[]) => {
          this.productsInWeeklyOffer = productsInWeeklyOffer;
        },
        error: (error) => {
          console.log("Error en la carga de productos en oferta: " + error.message);
        }
      }
    )
  }

  loadProductsBasedInTheLastHistory(idUser: number) {
    if(this.localStorage.getItem('User')) {
      // let userLogged = this.unrealizeUserName();
      this.productService.getProductsByLatestCategoryInUserHistory(idUser).subscribe(
        {
          next: (products: ProductDetailDTO[]) => {
            this.productBasedInTheLastHistory = products;
            this.categoryLatest = products[0].category.name;
            this.categoryFamilyLatest = products[0].category.categoryFamily.type
            this.productService.getAllByCategoryFamilyType(this.categoryFamilyLatest).subscribe(
              {
                next: (productsByCategoryFamily: ProductDTO[]) => {
                  this.productBasedInTheLastCategoryFamily = productsByCategoryFamily;
                },
                error: (error) => {
                  console.log("Error load products based in the last history:");
                  console.log(error.error)
                }
              }
            )
          },
          error: (error) => {
            console.log("Error load products based in the last history:");
            console.log(error.error)
          }
        }
      )
    }
  }

  ngOnInit() {
    this.unrealizeUserName();
    this.loadProductsInWeeklyOffer();
  }
}
