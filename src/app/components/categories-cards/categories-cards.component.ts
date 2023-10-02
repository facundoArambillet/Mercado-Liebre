import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-cards',
  templateUrl: './categories-cards.component.html',
  styleUrls: ['./categories-cards.component.css']
})
export class CategoriesCardsComponent {

  isDarkTheme: boolean = false;

  //Armar endpoint para traerme las familias de categorias con sus imagenes(array de bits)
  categoryFamilies: { name: string, image: string }[] = [
    { name: "Electrodomesticos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQganPeIiYYMFa2-0xi7PWesY_CoE_vk5k-4g&usqp=CAU" },
    { name: "Muebles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQganPeIiYYMFa2-0xi7PWesY_CoE_vk5k-4g&usqp=CAU" },
    { name: "Vehiculos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQganPeIiYYMFa2-0xi7PWesY_CoE_vk5k-4g&usqp=CAU" },
    { name: "Deportes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQganPeIiYYMFa2-0xi7PWesY_CoE_vk5k-4g&usqp=CAU" },
    { name: "Computacion", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQganPeIiYYMFa2-0xi7PWesY_CoE_vk5k-4g&usqp=CAU" },
    { name: "Consolas y videjouegos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQganPeIiYYMFa2-0xi7PWesY_CoE_vk5k-4g&usqp=CAU" },
  ];


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
