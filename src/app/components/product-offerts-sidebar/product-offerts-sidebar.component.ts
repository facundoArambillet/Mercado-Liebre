import { Component } from '@angular/core';

@Component({
  selector: 'app-product-offerts-sidebar',
  templateUrl: './product-offerts-sidebar.component.html',
  styleUrls: ['./product-offerts-sidebar.component.css']
})
export class ProductOffertsSidebarComponent {
  //Lista de  familia de categorias con por lo menos 1 producto que tenga descuento ordenados por Abecedario
  categoryFamilies: { name: string, quantity: number }[] = [
    { "name": "Electrodimesticos", "quantity": 50 },
    { "name": "Muebles", "quantity": 50 },
    { "name": "Vehiculos", "quantity": 50 },
    { "name": "Deportes", "quantity": 50 },
    { "name": "Computacion", "quantity": 50 },
  ]
  
  //Este filto va a ser igual para todos los productos ya que todos tienen precio
  //Agarrar el precio maximo de esa categoria y sacar el 25% y el 50%(hacer filtro hasta el 25%, del 25% hasta el 50%, y mas de 50%)
  filtersPriceByCategory: number[] = [200000, 400000];
  //Formatear los números en el arreglo
  formattedFiltersPriceByCategory: string[] = this.filtersPriceByCategory.map(number => number.toLocaleString());
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
