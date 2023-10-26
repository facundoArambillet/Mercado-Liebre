import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private email: string = "";
  private name: string = "";
  private lastName: string = "";
  private password: string = "";

  constructor() { }

  setEmail(newEmail: string) {
    this.email = newEmail;
  }
  setName(newName: string) {
    this.name = newName;
  }
  setLastName(newLastName: string) {
    this.lastName = newLastName;
  }
  setPassword(newPassword: string) {
    this.password = newPassword;
  }

  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  getName() {
    return this.name;
  }
  getLastName() {
    return this.lastName;
  }
}
