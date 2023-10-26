import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-address-card',
  templateUrl: './user-address-card.component.html',
  styleUrls: ['./user-address-card.component.css']
})
export class UserAddressCardComponent {
  //Ver si address.isPrincial es true para armar los modales de acciones
  @Input() address!: any;
  isPrincipal: boolean = false;

  isDarkTheme: boolean = false;

  updatePrincipalAddress() {
    console.log("Update Principal Address")
  }
  deleteAddress() {
    console.log("Delete address")
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
    this. loadAnchorTheme();
    this.observeTheme();
  }
}
