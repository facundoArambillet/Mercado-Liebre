import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailDTO } from 'src/app/models/user/user-detail-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seller-information',
  templateUrl: './seller-information.component.html',
  styleUrls: ['./seller-information.component.css'],
  providers: [DatePipe]
})
export class SellerInformationComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private datePipe = inject(DatePipe);
  isDarkTheme: boolean = false;

  seller!: UserDetailDTO;
  extractParamURL() {
    this.route.params.subscribe(params => {
      let idSeller = params['idSeller'];
      this.loadSeller(idSeller);
    });
  }

  loadSeller(idSeller: number) {
    this.userService.getById(idSeller).subscribe(
      {
        next: (seller: UserDetailDTO) => {
          this.seller = seller;
        },
        error: (error) => {
          console.log("Error load seller seller-information: " + error);
        }
      }
    )
  }
  formatCreationDate(): string {
    if (this.seller && this.seller.creationDate) {
      const formattedDate = this.datePipe.transform(this.seller.creationDate, 'dd-MM-yyyy');
      return formattedDate || ''; // Manejar el caso en que la fecha no se pueda formatear
    }
    return '';
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
    this.extractParamURL();
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
