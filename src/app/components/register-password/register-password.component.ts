import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/user/token';
import { UserCreateDTO } from 'src/app/models/user/user-create-dto';
import { UserDetailDTO } from 'src/app/models/user/user-detail-dto';
import { UserLoginDTO } from 'src/app/models/user/user-login-dto';
import { RegisterService } from 'src/app/services/register.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.css']
})
export class RegisterPasswordComponent {
  private registerService = inject(RegisterService);
  private userService = inject(UserService);
  private router = inject(Router);

  userEmail: string = this.registerService.getEmail();
  userName: string = this.registerService.getName();
  userLastName: string = this.registerService.getLastName();
  userPassword: string = "";
  passwordRepeat: string = "";
  isPasswordsMatchs: boolean = true;

  regexLengthUpperLower = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  regexNumberSign = /^(?=.*\d)(?=.*[?\-!*$#.]).+$/;
  regexSequence = /^(?!.*(.)\1\1|ABC).*$/i;
  regexWithoutWords = /^(?!.*(?:mercadoliebre|mercadopago)).*$/i;
  regexEmail = new RegExp(this.userEmail, "i");
  regexName = new RegExp(this.userName, "i");
  regexLastName = new RegExp(this.userLastName, "i");

  isDarkTheme: boolean = false;

  onSubmit() {
    const elementsCircle = document.querySelectorAll(".bi-circle");
    const elementsExclamation = document.querySelectorAll(".bi-exclamation-circle");
    if (elementsCircle.length > 0 && elementsExclamation.length == 0) {
      elementsCircle.forEach((element) => {
        element.classList.replace("bi-circle", "bi-exclamation-circle");
      })
    } else {
      if (this.userPassword === this.passwordRepeat) {
        this.registerService.setPassword(this.userPassword);
        //Aca haria el POST y loguearia al usuario redirigiendolo al home o a su perfil
        //this.router.navigate(["/"])
        let userCreate: UserCreateDTO = {
          email: this.userEmail,
          password: this.userPassword,
          name: this.userName,
          lastName: this.userLastName
        }

        this.userService.register(userCreate).subscribe(
          {
            next: () => {
              this.userService.getByEmail(userCreate.email).subscribe(

                {
                  next: (userDetail: UserDetailDTO) => {
                    let userLogin: UserLoginDTO = {
                      email: this.userEmail,
                      password: this.userPassword
                    }

                    this.userService.login(userLogin).subscribe(
                      {
                        next: (JWT: Token) => {
                          window.localStorage.setItem("User", JSON.stringify(userDetail));
                          window.localStorage.setItem("Token", JWT.token);
                          // this.router.navigate(["/"]);
                          window.location.href = '#';
                        },
                        error: (error) => {
                          console.log("Error in the login:");
                          console.log(error.error);
                        }
                      }
                    )
                  },
                  error: (error) => {
                      console.log("Error in the email")
                  },
                }
              )
            },
            error: (error) => {
              if(error.error.message = "User already exist") {
                Swal.fire({
                  icon: "error",
                  title: `Email existente`,
                  text: "El email que intentas utilizar ya se encuentra registrado",
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href= "/Mercado-Liebre/login";
                  }
                })
              }
              console.log("Error in the register");
              console.log(error.error);
            }
          }
        )
      } else {
        this.isPasswordsMatchs = false;
        console.log("Las passwords no coinciden");
      }
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
  setPasswordsMatchs() {
    this.isPasswordsMatchs = true;
  }
  onInputPassword() {
    const elementsExclamation = document.querySelectorAll(".bi-exclamation-circle");
    if (elementsExclamation.length > 0) {
      elementsExclamation.forEach((element) => {
        element.classList.replace("bi-exclamation-circle", "bi-circle");
      })
    }
    this.setPasswordsMatchs();
  }

  ngOnInit() {
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
