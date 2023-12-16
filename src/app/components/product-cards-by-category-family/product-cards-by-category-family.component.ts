import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDTO } from 'src/app/models/product/product-dto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-cards-by-category-family',
  templateUrl: './product-cards-by-category-family.component.html',
  styleUrls: ['./product-cards-by-category-family.component.css']
})
export class ProductCardsByCategoryFamilyComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  
  productsByCategoryFamily: ProductDTO[] = [];
  categoryFamilyType: string = " ";
  products: number[] = new Array(5);

  extractParamURL() {
    this.route.params.subscribe(params => {
      let categoryFamilyTypeURL = params['category-family'];
      this.categoryFamilyType = categoryFamilyTypeURL;
      this.loadProducts(categoryFamilyTypeURL);

    });
  }

  loadProducts(categoryFamilyType: string) {
    this.productService.getAllByCategoryFamilyType(categoryFamilyType).subscribe(
      {
        next: (products: ProductDTO[]) => {
          this.productsByCategoryFamily = products;
        },
        error: (error) => {
          console.log("Error load products: " + error.message);
          this.router.navigate(["/**"]);
        }
      }
    )
  }
  ngOnInit() {
    this.extractParamURL();
  }
}
