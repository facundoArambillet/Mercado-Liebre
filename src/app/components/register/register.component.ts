import { Component, Input, inject } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private registerService = inject(RegisterService);

  email: string = "";
  name: string = "";
  password: string = "";

  isDarkTheme: boolean = false;

  loadCredentials() {
    this.email = this.registerService.getEmail();
    this.name = `${this.registerService.getName().toLowerCase()} ${this.registerService.getLastName().toLowerCase()}`;
    this.password = this.registerService.getPassword();
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
    this.loadCredentials();
    this.observeTheme();
  }
}
