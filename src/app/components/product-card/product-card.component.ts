import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: number[];
  @Input() redirectedByUserHistory!: boolean;
  //Este seria un atributo de cada producto y dependiendo si es true o false agregaria el "weekly deal"
  isInWeeklyDeal: boolean = true;
  //Si tiene un descuento mostrarlo en la card(puede estar en oferta y no entrar en la oferta semanal)
  isInOffer: boolean = true;
  //Si tiene 0% y 0 cuotas en payment_plans significa que el pago es de contado
  isInCash: boolean = false;
  //Si tiene mas de 1 cuotas(minimo 2), con 0% de interes resalto el texto de las cuotas
  hasInterestFreeInstallments: boolean = false;

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
  deleteHistory(event: Event) {
    //Llamar endpoint de delete
    event.stopPropagation();
    console.log("btn delete");
  }
  ngOnInit() {
    this. loadAnchorTheme();
    this.observeTheme();
  }
}
