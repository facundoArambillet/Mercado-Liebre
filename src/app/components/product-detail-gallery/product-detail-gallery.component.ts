import { Component, Input, inject } from '@angular/core';
import { ProductImage } from 'src/app/models/product-image/product-image';
import { ProductImageDTO } from 'src/app/models/product-image/product-image-dto';
import { ProductDetailDTO } from 'src/app/models/product/product-detail-dto';
import { ProductImageService } from 'src/app/services/product-image.service';

@Component({
  selector: 'app-product-detail-gallery',
  templateUrl: './product-detail-gallery.component.html',
  styleUrls: ['./product-detail-gallery.component.css']
})
export class ProductDetailGalleryComponent {
  @Input() product!: ProductDetailDTO;

  private productImageService = inject(ProductImageService);

  // productImages: string[] = [
  //   "https://http2.mlstatic.com/D_NQ_NP_975634-MLA52639906137_112022-O.webp",
  //   "https://http2.mlstatic.com/D_Q_NP_965868-MLA52639906141_112022-R.webp",
  //   "https://http2.mlstatic.com/D_Q_NP_860175-MLA52639795516_112022-R.webp"
  // ];
  productImagesString: string[] = [];
  selectedImageIndex: number = 0;
  selectedImage: string = "";

  loadImages() {
    this.productImageService.getByIdProduct(this.product.idProduct).subscribe(
      {
        next: (images: ProductImageDTO[]) => {
          for (let image of images) {
            let formattedImage = `data:image/png;base64,${image.image}`
            this.productImagesString.push(formattedImage)
          }
          this.selectedImage = this.productImagesString[0];
        },
        error: (error) => {
          console.log("Error load images: " + error.message);
        }
      }
    )
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
    this.selectedImage = this.productImagesString[index];
  }

  ngOnInit() {
    this.loadImages();
  }
}
