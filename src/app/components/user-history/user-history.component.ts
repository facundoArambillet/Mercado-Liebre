import { Component, inject } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { User } from 'src/app/models/user/user';
import { UserDetailDTO } from 'src/app/models/user/user-detail-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent {
  private userService = inject(UserService);
  productsHistory: Product[] = [];
  isSettingsHidden: boolean = true;
  localStorage: Storage = window.localStorage;
  
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

  unrealizeUserName() {
    let userString = window.localStorage.getItem("User");
    let user!: User;
    if (userString !== null) {
      user = JSON.parse(userString);
    }
    return user;
  }


  loadHistory() {
    let userLogged = this.unrealizeUserName();
    this.userService.getById(userLogged.idUser).subscribe(
      {
        next: (user: UserDetailDTO) => {
          this.productsHistory = user.products;
        },
        error: (error) => {
          console.log("Error load user history: " + error);
        }
      }
    )
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
    this.loadHistory();
    this.loadAnchorTheme();
    this.observeTheme();
  }
}
