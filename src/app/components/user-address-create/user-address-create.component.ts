import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAddress } from 'src/app/models/user-address/user-address';
import { UserAddressCreateDTO } from 'src/app/models/user-address/user-address-create-dto';
import { UserAddressDetailDTO } from 'src/app/models/user-address/user-address-detail-dto';
import { User } from 'src/app/models/user/user';
import { UserDetailDTO } from 'src/app/models/user/user-detail-dto';
import { UserDTO } from 'src/app/models/user/user-dto';
import { UserAddressService } from 'src/app/services/user-address.service';

@Component({
  selector: 'app-user-address-create',
  templateUrl: './user-address-create.component.html',
  styleUrls: ['./user-address-create.component.css']
})
export class UserAddressCreateComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userAddressService = inject(UserAddressService);
  isDarkTheme: boolean = false;

  userName: string = "";
  postalCode!: number;
  province: string = "";
  city: string = "";
  address: string = "";
  addressNumber!: number;
  contactPhone!: number;
  addressUpdate!: UserAddressDetailDTO;

  hasQueryParam() {
    const idAddress = this.route.snapshot.paramMap.get('id');
    return idAddress ? true : false;
  }
  
  createAddress() {
    //Agarrar los datos de los inputs y pegarle al endpoint
    console.log("Create");
    let userDetailDTO: UserDetailDTO | null = this.unrealizeUser();
    if(userDetailDTO != null) {
      let userDTO: UserDTO = {
        idUser: userDetailDTO.idUser,
        email: userDetailDTO.email,
        name: userDetailDTO.name,
        lastName: userDetailDTO.lastName,
        salesMade: userDetailDTO.salesMade
      }
      let userAddress: UserAddressCreateDTO = {
        address: this.address,
        addressNumber: this.addressNumber,
        province: this.province,
        city: this.city,
        postalCode: this.postalCode,
        contactPhone: this.contactPhone,
        user: userDTO
      }
      this.userAddressService.createUserAddress(userAddress).subscribe(
        {
          next: () => {
            this.router.navigate(["/address"]);
          },
          error: (error) => {
            console.log("Error saveAddress: " + error.message);
          }
        }
      )
    }
  }

  loadAddress() {
    const idAddress: string | null = this.route.snapshot.paramMap.get('id');
    if(idAddress != null) {
      const idAddresNumber = parseInt(idAddress);
      this.userAddressService.getById(idAddresNumber).subscribe(
        {
          next: (address: UserAddressDetailDTO) => {
            // userName: string = "";
            this.addressUpdate = address;
            this.postalCode = address.postalCode;
            this.province = address.province;
            this.city = address.city;
            this.address = address.address;
            this.addressNumber = address.addressNumber;
            this.contactPhone = address.contactPhone;
          },
          error: (error) => {
            console.log("Error load address: " + error.message);
          }
        }
      )
    }
  }

  updateAddress() {
    //Agarrar los datos de los inputs y pegarle al endpoint
    let userDetailDTO: UserDetailDTO | null = this.unrealizeUser();
    if(userDetailDTO != null) {
      let userAddressDetailDTO: UserAddressDetailDTO = {
        idAddress: 0,
        address: this.address,
        addressNumber: this.addressNumber,
        province: this.province,
        city: this.city,
        postalCode: this.postalCode,
        contactPhone: this.contactPhone,
        principal: this.addressUpdate.principal,
        user: this.addressUpdate.user
      }
      this.userAddressService.updateUserAddress(this.addressUpdate.idAddress, userAddressDetailDTO).subscribe(
        {
          next: () => {
            this.router.navigate(["/address"]);
          },
          error: (error) => {
            console.log("Error update address: " + error.message);
          }
        }
      )
    }
  }

  saveAddress() {
    this.hasQueryParam() ? this.updateAddress() : this.createAddress();
  }

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
    this.loadAddress();
  }
}
