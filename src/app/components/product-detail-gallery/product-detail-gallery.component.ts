import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail-gallery',
  templateUrl: './product-detail-gallery.component.html',
  styleUrls: ['./product-detail-gallery.component.css']
})
export class ProductDetailGalleryComponent {
  productImages: string[] = [
    "https://http2.mlstatic.com/D_NQ_NP_975634-MLA52639906137_112022-O.webp",
    "https://http2.mlstatic.com/D_Q_NP_965868-MLA52639906141_112022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_860175-MLA52639795516_112022-R.webp"
  ];
  selectedImageIndex: number = 0;
  selectedImage: string  = this.productImages[0];

  selectImage(index: number) {
    this.selectedImageIndex = index;
    this.selectedImage =  this.productImages[index];
  }
}
