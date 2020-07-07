import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpEvent, HttpInterceptor, HttpHandler } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:8000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  loginStatusChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  login(data) {
    const API_URL = `${this.endpoint}/login`
    return this.http.post(API_URL, data)
              // .subscribe(res => this.setSession(res))
  }

  setSession(authResult) {
    const expiresAt = new Date(new Date().getTime() + authResult.expiresIn * 1000)
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('id_token_expires_at', JSON.stringify(expiresAt.valueOf()));
    this.loginStatusChange.next(true)
  }

  logout(){
    localStorage.removeItem('id_token')
    localStorage.removeItem('id_token_expires_at')
    this.loginStatusChange.next(false)
  }

  getExpiration() {
    const expiration = localStorage.getItem('id_token_expires_at')
    const expiresAt = JSON.parse(expiration)
    return new Date(expiresAt)
  }

  public isLoggedIn() {
    return new Date() < this.getExpiration();
  }

}
