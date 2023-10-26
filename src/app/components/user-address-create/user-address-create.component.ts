import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-address-create',
  templateUrl: './user-address-create.component.html',
  styleUrls: ['./user-address-create.component.css']
})
export class UserAddressCreateComponent {
  private route = inject(ActivatedRoute);
  isDarkTheme: boolean = false;

  hasQueryParam() {
    const idAddress = this.route.snapshot.paramMap.get('id');
    if (idAddress) {
      console.log(idAddress);
      //Armar endpoint para buscar la address y cargar los datos en los inputs
    }
  }
  createAddress() {
    //Agarrar los datos de los inputs y pegarle al endpoint
    console.log("Create")
  }
  updateAddress() {
    //Agarrar los datos de los inputs y pegarle al endpoint
    console.log("Update")
  }
  saveAddress() {
    const idAddress = this.route.snapshot.paramMap.get('id');
    idAddress ? this.updateAddress() : this.createAddress();
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
    this.hasQueryParam();
  }
}
