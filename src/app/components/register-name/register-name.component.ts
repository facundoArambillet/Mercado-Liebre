import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-name',
  templateUrl: './register-name.component.html',
  styleUrls: ['./register-name.component.css']
})
export class RegisterNameComponent {
  private router = inject(Router);
  private registerService = inject(RegisterService);

  userName: string = "";
  userLastName: string = "";
  nameCompleted: string = "";
  lastNameCompleted: string = "";
  isDarkTheme: boolean = false;

  onSubmit() {
    if(this.userName && this.userLastName) {
      this.nameCompleted = this.userName;
      this.registerService.setName(this.nameCompleted);
      this.lastNameCompleted = this.userLastName;
      this.registerService.setLastName(this.lastNameCompleted);
      this.router.navigate(["/register"])
    } else {
      console.log("Hay campos vacios")
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
  }
}
