import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.css']
})
export class RegisterPasswordComponent {
  private router = inject(Router);
  private registerService = inject(RegisterService);

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
        this.router.navigate(["/"])
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
        console.log(element)
      })
    }
    this.setPasswordsMatchs();
  }

  ngOnInit() {
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
