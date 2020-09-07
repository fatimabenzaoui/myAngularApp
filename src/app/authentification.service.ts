import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const link = 'http://localhost:3000/api/Users/login';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService { 
  constructor(
    private http: HttpClient
  ) {}  
  login(credentials) {
    return this.http.post(link, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
  isLogged() {
    return !! localStorage.getItem('token');
  }
}

