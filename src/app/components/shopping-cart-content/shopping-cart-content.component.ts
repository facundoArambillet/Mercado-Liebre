import { ApplicationRef, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductImageDTO } from 'src/app/models/product-image/product-image-dto';
import { ProductDetailDTO } from 'src/app/models/product/product-detail-dto';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-content',
  templateUrl: './shopping-cart-content.component.html',
  styleUrls: ['./shopping-cart-content.component.css']
})
export class ShoppingCartContentComponent {
  @Input() product!: ProductDetailDTO;
  @Input() idCart!: number;
  private shoppingCartService = inject(ShoppingCartService);
  private productImageService = inject(ProductImageService);
  private router = inject(Router);
  image: string = "";
  isDarkTheme: boolean = false;

  removeProduct(idProduct: number) {
    this.shoppingCartService.removeProduct(this.idCart, idProduct).subscribe(
      {
        next: () => {
          console.log("Remove");
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/cart']);
          });
          // this.router.navigate(["/cart"]);
        },
        error: (error) => {
          console.log(error.error);
        }
      }
    )
  }

  loadImages() {
    this.productImageService.getByIdProduct(this.product.idProduct).subscribe(
      {
        next: (images: ProductImageDTO[]) => {
          let formattedImage = `data:image/png;base64,${images[0].image}`
          this.image = formattedImage;
        },
        error: (error) => {
          console.log("Error load images: " + error.message);
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
    this.loadImages();
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
