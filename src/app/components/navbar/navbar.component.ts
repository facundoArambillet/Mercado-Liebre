import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDTO } from 'src/app/models/category/category-dto';
import { UserAddressDetailDTO } from 'src/app/models/user-address/user-address-detail-dto';
import { User } from 'src/app/models/user/user';
import { CategoryService } from 'src/app/services/category.service';
import { UserAddressService } from 'src/app/services/user-address.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private router = inject(Router);
  private categoryService = inject(CategoryService);
  private userAddressService = inject(UserAddressService);

  categories: CategoryDTO[] = [];
  localStorage: Storage = window.localStorage;
  isLightTheme: boolean = true;
  isHidden: boolean = true;
  userName: string = "";
  userLastName: string = "";
  userAddresses: UserAddressDetailDTO[] = [];
  idUser!: number;
  // themesModes() {
  //   if(document.querySelector("body")?.getAttribute("data-bs-theme") == "light") {

  //     document.querySelector("body")?.setAttribute("data-bs-theme", "dark");
  //     document.querySelector("body")?.classList.remove("light-mode-body");
  //     document.querySelector("body")?.classList.add("dark-mode-body");
  //     document.querySelector("nav")?.classList.remove("light-mode-nav")
  //     document.querySelector("nav")?.classList.add("dark-mode-nav");
  //     document.querySelector(".ubication")?.classList.add("ubication-dark-mode");
  //     document.querySelector(".ubication")?.classList.remove("ubication");
  //     document.querySelector("#dl-icon")?.setAttribute("class", "bi bi-sun-fill");
  //     document.querySelector("#logo")?.setAttribute("src", "./assets/favicon_light.ico");
  //   } else {
  //     document.querySelector("body")?.setAttribute("data-bs-theme", "light");
  //     document.querySelector("#dl-icon")?.setAttribute("class", "bi bi-moon-fill");
  //     document.querySelector("nav")?.classList.add("light-mode-nav")
  //     document.querySelector(".ubication-dark-mode")?.classList.add("ubication");
  //     document.querySelector(".ubication-dark-mode")?.classList.remove("ubication-dark-mode");
  //     document.querySelector("#logo")?.setAttribute("src", "./favicon.ico");
  //   }
  // }

  loadCategories() {
    this.categoryService.getAll().subscribe(
      {
        next: (categories: CategoryDTO[]) => {
          this.categories = categories;
        },
        error: (error) => {
          console.log("Error load categories: " + error.message);
        }
      }
    )
  }

  loadAddress() {
    if(this.localStorage.getItem("User")) {
       this.userAddressService.getByUser(this.idUser).subscribe(
        {
          next: (addresses: UserAddressDetailDTO[]) => {
            this.userAddresses = addresses;
          },
          error: (error) => {
            console.log("Error load address: " + error.message);
          }
        }
       )
    }
  }

  showPrincipalAddress() {
    for(let address of this.userAddresses) {
      if(address.principal) {
        let addressCompleted = `${address.address} ${address.addressNumber}`;
        return addressCompleted;
      }
    }
    return null;
  }
  //Armar funcion para cambiar la address principal(Deberia buscar las direcciones por usuario y ver el atributo 'isPrincipal')
  saveAddress() {
    for(let address of this.userAddresses) {
      if(address.principal) {
        this.userAddressService.toggleAddressPrincipal(address).subscribe(
          {
            next: () => {
              window.location.reload();
            },
            error: (error) => {
              console.log("Error save address: " + error.message);
            }
          }
        )
      }
    }
    console.log("Direccion cambiada");
  }
  
  unrealizeUserName() {
    let userString = window.localStorage.getItem("User");
    let user: User;
    if (userString !== null) {
      user = JSON.parse(userString);
      this.idUser = user.idUser;
      this.userName = user.name;
      this.userLastName = user.lastName;
    }
  }

  unlogUser() {
    window.localStorage.clear();
    // window.location.reload();
  }

  toggleDropDown() {
    this.isHidden = !this.isHidden;
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    //Buscar como hacerlo sin manipular el DOM desde querysSelectors
    this.isLightTheme ? document.querySelector("body")?.setAttribute("data-bs-theme","light") 
    : document.querySelector("body")?.setAttribute("data-bs-theme","dark");
    this.isLightTheme ? document.querySelector("body")?.classList.replace("dark-mode-body","light-mode-body")
    : document.querySelector("body")?.classList.replace("light-mode-body","dark-mode-body");
  }

  ngOnInit() {
    this.unrealizeUserName();
    this.loadCategories();
    this.loadAddress();
  }
}
