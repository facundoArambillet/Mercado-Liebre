import { Component, inject } from '@angular/core';
import { UserAddressDetailDTO } from 'src/app/models/user-address/user-address-detail-dto';
import { User } from 'src/app/models/user/user';
import { UserAddressService } from 'src/app/services/user-address.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent {
  private userAddressService = inject(UserAddressService);

  localStorage: Storage = window.localStorage;
  userAddress: UserAddressDetailDTO[] = [];
  idUser!: number;
  isDarkTheme: boolean = false;

  loadAddresses() {
    this.userAddressService.getByUser(this.idUser).subscribe(
      {
        next: (address: UserAddressDetailDTO[]) => {
          this.userAddress = address;
        },
        error: (error) => {
          console.log("Error load addresses: " + error.message);
        }
      }
    )
  }

  unrealizeUser() {
    let userString = window.localStorage.getItem("User");
    let user: User;
    if (userString !== null) {
      user = JSON.parse(userString);
      this.idUser = user.idUser;
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
    this.unrealizeUser();
    this.loadAddresses();
  }
}
