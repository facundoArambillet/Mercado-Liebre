import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { CategoryDTO } from 'src/app/models/category/category-dto';

@Component({
  selector: 'app-product-card-by-category-sidebar',
  templateUrl: './product-card-by-category-sidebar.component.html',
  styleUrls: ['./product-card-by-category-sidebar.component.css']
})
export class ProductCardByCategorySidebarComponent {
  @Input() category!: CategoryDTO;
  @Input() numberOfCategories!: number;
  isDarkTheme: boolean = false;
  //Armar endpoint para traerme los atributos de una categoria en particular
  filtersByCategory: string[] = ["Marca", "Color"];
  //Armar endpoint en product_attributes para traerme los atributos de producto filtrados por producto y categoria
  filterValues: { [key: string]: string[] } = {};
  //Este filto va a ser igual para todos los productos ya que todos tienen precio
  //Agarrar el precio maximo de esa categoria y sacar el 25% y el 50%(hacer filtro hasta el 25%, del 25% hasta el 50%, y mas de 50%)
  filtersPriceByCategory: number[] = [200000, 400000];
  //Formatear los números en el arreglo
  formattedFiltersPriceByCategory: string[] = this.filtersPriceByCategory.map(number => number.toLocaleString());


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

    this.filtersByCategory.forEach((filter) => {
      this.getFilterValues(filter);
    });
  }


  getFilterValues(filterName: string) {
    if (filterName == "Marca") {
      this.filterValues[filterName] = ["Drean", "Electrolux", "Gafa"];
    } else {
      this.filterValues[filterName] = ["Rojo", "Blanco", "Negro", "Gris"];
    }
  }


}
