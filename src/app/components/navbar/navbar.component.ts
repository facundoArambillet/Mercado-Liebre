import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private router = inject(Router);
  isLightTheme: boolean = true;
  isHidden: boolean = true;
  @Input() isLogged!: boolean;
  userAddress: number[] = new Array(2);
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

  //Armar funcion para cambiar la address principal(Deberia buscar las direcciones por usuario y ver el atributo 'isPrincipal')
  saveAddress() {
    console.log("Direccion cambiada");
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

}
