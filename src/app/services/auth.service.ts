import { LoginBody } from './../modules/interfaces/login-body.interface';
import { RegisterBody } from './../modules/interfaces/register-body.interface';
import { RegisterResponse } from './../modules/interfaces/register-response.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly serverUrl = 'https://reqres.in/api';
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  isLogged$ = this.isLoggedSubject.asObservable();

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.isLoggedSubject.next(true);
    }
  }

  registerUser(body: RegisterBody): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>(this.serverUrl + '/register', body)
      .pipe(tap((res) => this.isLoggedSubject.next(true)));
  }
  loginUser(body: LoginBody): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>(this.serverUrl + '/login', body)
      .pipe(tap((res) => this.isLoggedSubject.next(true)));
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }
}
