import { Component, SimpleChange, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryDTO } from 'src/app/models/category/category-dto';
import { ProductDTO } from 'src/app/models/product/product-dto';
import { CategoryService } from 'src/app/services/category.service';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductOfferService } from 'src/app/services/product-offer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-cards-by-category',
  templateUrl: './product-cards-by-category.component.html',
  styleUrls: ['./product-cards-by-category.component.css']
})
export class ProductCardsByCategoryComponent {
  private route = inject(ActivatedRoute);
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);
  isDarkTheme: boolean = false;
  category!: CategoryDTO;
  categoryName: string = " ";
  productsByCategory: ProductDTO[] = [];

  loadProductsAndCategory() {
    this.route.params.subscribe(params => {
      let categoryName = params['category'];
      this.loadCategory(categoryName);
      this.loadProductsByCategoryName(categoryName);
    });

  }

  loadCategory(categoryName: string) {
    this.categoryService.getByName(categoryName).subscribe(
      {
        next: (category: CategoryDTO) => {
          this.category = category;
        },
        error: (error) => {
          console.log("Error load category produc-cards-by-category: " + error.message);
        }
      }
    )
  }
  loadProductsByCategoryName(categoryName: string) {
    this.productService.getAllByCategoryName(categoryName).subscribe(
      {
        next: (products: ProductDTO[]) => {
          this.productsByCategory = products;
        },
        error: (error) => {
          console.log("Error loadProducts product cards by category: " + error.message);
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
    this.loadProductsAndCategory();
    // this.loadProductsByCategoryName();
    this.loadAnchorTheme();
    this.observeTheme();
    // console.log(this.categoryName);
  }
}
