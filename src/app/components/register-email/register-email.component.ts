import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-email',
  templateUrl: './register-email.component.html',
  styleUrls: ['./register-email.component.css']
})
export class RegisterEmailComponent {
  private router = inject(Router);
  private userService = inject(UserService);
  private registerService = inject(RegisterService);

  userEmail: string = this.registerService.getEmail();
  isChecked: boolean = false;
  isEmailFormatValid: boolean = true;

  isDarkTheme: boolean = false;

  onSubmit() {
    // const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    this.userService.validateEmail(this.userEmail).subscribe(
      {
        next:(boolean) => {
          if (boolean) {
            if (this.isChecked) {
              this.registerService.setEmail(this.userEmail);
              this.router.navigate(["/register"])
            } else {
              document.querySelector(".form-check")?.classList.add("policies-not-confirmed");
            }
      
          } else {
            this.isEmailFormatValid = false;
          }
        }
      }
    )


  }
  
  setEmailFormat() {
    this.isEmailFormatValid = true;
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
