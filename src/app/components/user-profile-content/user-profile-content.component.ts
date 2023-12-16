import { Component } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserDetailDTO } from 'src/app/models/user/user-detail-dto';

@Component({
  selector: 'app-user-profile-content',
  templateUrl: './user-profile-content.component.html',
  styleUrls: ['./user-profile-content.component.css']
})
export class UserProfileContentComponent {
  
  isDarkTheme: boolean = false;
  user!: UserDetailDTO;

  unrealizeUser() {
    let userString = window.localStorage.getItem("User");
    let user: User;
    if (userString !== null) {
      user = JSON.parse(userString);
      this.user = user;
      return user;
    }
    return null;
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
    this.unrealizeUser();
  }
}
