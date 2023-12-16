import { Component, Input } from '@angular/core';
import { ProductDetailDTO } from 'src/app/models/product/product-detail-dto';

@Component({
  selector: 'app-product-detail-content',
  templateUrl: './product-detail-content.component.html',
  styleUrls: ['./product-detail-content.component.css']
})
export class ProductDetailContentComponent {
  @Input() product!: ProductDetailDTO;
  productAtributtes: Number[] = new Array(5);

  isDarkTheme: boolean = false;


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
    this. loadAnchorTheme();
    this.observeTheme();
  }
}
