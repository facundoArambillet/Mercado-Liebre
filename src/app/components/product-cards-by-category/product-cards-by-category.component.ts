import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-cards-by-category',
  templateUrl: './product-cards-by-category.component.html',
  styleUrls: ['./product-cards-by-category.component.css']
})
export class ProductCardsByCategoryComponent {
  private route = inject(ActivatedRoute);
  categoryName: string = " ";
  products: number[] = new Array(5);

  ngOnInit() {
    this.route.params.subscribe(params => {
      //console.log(params['category']);
      this.categoryName = params['category'];
    });
  }
}
