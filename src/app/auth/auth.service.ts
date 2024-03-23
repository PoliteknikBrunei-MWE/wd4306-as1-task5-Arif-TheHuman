import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIsAuthenticated = false;

  get isUserAuthenticated() {
    return this.userIsAuthenticated;
  }

  constructor() { }
  login() {
    this.userIsAuthenticated = true;
  }

  logOut() {
    this.userIsAuthenticated = false;
  }


}
