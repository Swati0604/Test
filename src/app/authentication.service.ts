import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  _registerUrl = 'https://cors-anywhere.herokuapp.com/http://ecom.btosc.com/api/register';
  _loginUrl = 'http://ecom.btosc.com/api/login';

  constructor(
    private http: HttpClient,
  ) { }

  register(userData) {
    return this.http.post<any>(this._registerUrl, userData); 
  }
  loginUser(userData) {
    return this.http.post<any>(this._loginUrl, userData)
  }
}
