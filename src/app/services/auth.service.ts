import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string | null {
    let tokenString = localStorage.getItem("Token");
    return tokenString;
  }
}
