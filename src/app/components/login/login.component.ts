import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/user/token';
import { UserDetailDTO } from 'src/app/models/user/user-detail-dto';
import { UserDTO } from 'src/app/models/user/user-dto';
import { UserLoginDTO } from 'src/app/models/user/user-login-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private userService = inject(UserService);
  private router = inject(Router);
  private emailUser: string = "";
  private user!: UserDetailDTO;
  userCredentials: string = "";
  emailValid: boolean = false;
  isDarkTheme: boolean = false;

  submitEmail() {
    //Hacer service para que le pegue a mi backend y busque por email, en caso de existir que se dirija a la siguiente
    //pantalla, si no existe marcar input y texto en rojo y poner un mensaje de error abajo de dicho input
    this.userService.getByEmail(this.userCredentials).subscribe(
      {
        next: (userDetailDTO: UserDetailDTO) => {
          this.emailUser = this.userCredentials;
          this.user = userDetailDTO;
          this.userCredentials = "";
          this.emailValid = true;
        },
        error: (error) => {
          //Hacer texto de advertencia del error
          console.log("Error email: " + error.message);
        }
      }
    )
  }

  submitPassword() {
    let userLogin: UserLoginDTO = {
      email: this.emailUser,
      password: this.userCredentials
    };

    this.userService.login(userLogin).subscribe(
      {
        next: (JWT: Token) => {
          window.localStorage.setItem("User", JSON.stringify(this.user));
          window.localStorage.setItem("Token", JWT.token);
          // this.router.navigate(["/"]);
          window.location.href = "http://localhost:4200/Mercado-Liebre/";
        },
        error: (error) => {
          console.log("Error password: " + error.message);
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
  }
}
