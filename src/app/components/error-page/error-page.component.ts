import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {


  hideComponents() {
    document.querySelector("nav")?.classList.add("hidden");
    document.querySelector("footer")?.classList.add("hidden");
  }

  showComponents() {
    document.querySelector("nav")?.classList.remove("hidden");
    document.querySelector("footer")?.classList.remove("hidden");
  }
  ngOnInit() {
    this.hideComponents();
  }
}
