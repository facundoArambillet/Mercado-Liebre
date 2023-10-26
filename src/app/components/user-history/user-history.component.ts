import { Component } from '@angular/core';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent {
  productsHistory: number[] = new Array(15);
  isSettingsHidden: boolean = true;

  isDarkTheme: boolean = false;

  toogleHidden() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  deleteAllHistory() {
    //Usar endpoint que agarre el idUser y elimine de la tabla user_history todas sus apariciones
    console.log("Historial eliminado");
    //Y despues recargar la pagina
    window.location.reload();
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
