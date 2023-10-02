import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-cards-by-category-family',
  templateUrl: './product-cards-by-category-family.component.html',
  styleUrls: ['./product-cards-by-category-family.component.css']
})
export class ProductCardsByCategoryFamilyComponent {
  private route = inject(ActivatedRoute);
  categoryFamilyName: string = " ";
  products: number[] = new Array(5);

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['category-family']);
      this.categoryFamilyName = params['category-family'];
    });
  }
}
