import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryDTO } from 'src/app/models/category/category-dto';
import { ProductDetailDTO } from 'src/app/models/product/product-detail-dto';
import { User } from 'src/app/models/user/user';
import { UserDetailDTO } from 'src/app/models/user/user-detail-dto';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private userService = inject(UserService);

  seller!: UserDetailDTO;
  product!: ProductDetailDTO;
  category!: CategoryDTO;
  categoryName: string = '';
  isDarkTheme: boolean = false;
  productName: string = "";
  idUser: number = 0;

  extractNameURL() {
    this.route.params.subscribe(params => {
      let productName = params['name'];
      this.productName = productName;
      this.loadProduct(productName);
    });
  }

  loadProduct(productName: string) {
    this.productService.getByName(productName).subscribe(
      {
        next: (product: ProductDetailDTO) => {
          this.product = product;
          this.loadCategory();
          this.loadSeller();
        },
        error: (error) => {
          console.log("Error load product product-detail: " + error.message);
        }
      }
    )
  }

  loadCategory() {
    if (this.product) {
      this.categoryService.getByName(this.product.category.name).subscribe(
        {
          next: (category: CategoryDTO) => {
            this.category = category;
            this.categoryName = category.name;
          },
          error: (error) => {
            console.log("Error load category product-detail: " + error.message);
          }
        }

      )
    }
  }

  loadSeller() {
    if(this.product) {
      this.userService.getById(this.product.user.idUser).subscribe(
        {
          next: (user: UserDetailDTO) => {
            this.seller = user;
          },
          error: (error) => {
            console.log("Error load seller: " + error.message);
          }
        }
      )
    }
  }

  loadProductIntoUserHistory() {
    if(this.productName) {
      this.productService.getByNameAndInsertIntoHistory(this.productName,this.idUser).subscribe(
        {
          next: () => {

          },
          error: (error) => {
            console.log("Error load product into user history: " + error.message);
          }
        }
      )
    }
  }

  unrealizeUser() {
    let userString = window.localStorage.getItem("User");
    let user!: User;
    if (userString !== null) {
      user = JSON.parse(userString);
      this.idUser = user.idUser;
      this.loadProductIntoUserHistory();
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
    this.loadAnchorTheme();
    this.observeTheme();
    this.extractNameURL();
    this.unrealizeUser();
  }

}
