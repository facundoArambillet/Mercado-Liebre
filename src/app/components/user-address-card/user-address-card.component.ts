import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserAddressDetailDTO } from 'src/app/models/user-address/user-address-detail-dto';
import { User } from 'src/app/models/user/user';
import { UserAddressService } from 'src/app/services/user-address.service';

@Component({
  selector: 'app-user-address-card',
  templateUrl: './user-address-card.component.html',
  styleUrls: ['./user-address-card.component.css']
})
export class UserAddressCardComponent {
  //Ver si address.isPrincial es true para armar los modales de acciones
  @Input() address!: UserAddressDetailDTO;
  private router = inject(Router);
  private userAddressService = inject(UserAddressService);
  userName: string = "";
  isDarkTheme: boolean = false;
  
  unrealizeUser() {
    let userString = window.localStorage.getItem("User");
    let user: User;
    if (userString !== null) {
      user = JSON.parse(userString);
      this.userName = `${user.name} ${user.lastName}`;
      return user;
    }
    return null;
  }

  updatePrincipalAddress(idAddress: number) {
    this.userAddressService.getById(idAddress).subscribe(
      {
        next: (userAddressDetailDTO: UserAddressDetailDTO) => {
          this.userAddressService.toggleAddressPrincipal(userAddressDetailDTO).subscribe(
            {
              next: () => {
                window.location.reload();
              },
              error: (error) => {
                console.log("Error update principal address: " + error.message);
              }
            }
          )
        },
        error: (error) => {
          console.log("Error update principal address: " + error.message);
        }
      }
    )

  }

  deleteAddress(idAddress: number) {
    this.userAddressService.deleteUserAddress(idAddress).subscribe(
      {
        next: () => {
          window.location.reload();
        },
        error: (error) => {
          console.log("Error delete address: " + error.message);
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
    this.loadAnchorTheme();
    this.observeTheme();
    this.unrealizeUser();
  }
}
