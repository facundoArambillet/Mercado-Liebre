import { Component } from '@angular/core';

@Component({
  selector: 'app-user-purchases-card',
  templateUrl: './user-purchases-card.component.html',
  styleUrls: ['./user-purchases-card.component.css']
})
export class UserPurchasesCardComponent {
  isDarkTheme: boolean = false;

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
