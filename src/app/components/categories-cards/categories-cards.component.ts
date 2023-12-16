import { Component, inject } from '@angular/core';
import { CategoryFamilyDTO } from 'src/app/models/category-family/category-family-dto';
import { CategoryFamilyService } from 'src/app/services/category-family.service';

@Component({
  selector: 'app-categories-cards',
  templateUrl: './categories-cards.component.html',
  styleUrls: ['./categories-cards.component.css']
})
export class CategoriesCardsComponent {
  private categoryFamilyService = inject(CategoryFamilyService);
  categoriesFamilyPopular: CategoryFamilyDTO[] = [];
  isDarkTheme: boolean = false;

  //Armar endpoint para traerme las familias de categorias con sus imagenes(array de bits)

  loadCategoriesFamilyPopular() {
    this.categoryFamilyService.getPopularCategoryFamilies().subscribe(
      {
        next: (categoriesFamily: CategoryFamilyDTO[]) => {
          this.categoriesFamilyPopular = categoriesFamily;
        },
        error: (error) => {
          console.log("Error load categories family popular: " + error.message);
        }
      }
    )
  }
  convertValidImage(categoryFamily: CategoryFamilyDTO) {
    let validImageString = `data:image/png;base64,${categoryFamily.image}`;
    return validImageString;
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
    this.loadCategoriesFamilyPopular();
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
