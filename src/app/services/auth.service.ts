import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginApiResponse, User } from '../auth/types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<LoginApiResponse> {
    return this.httpClient.post<LoginApiResponse>('http://localhost:3000/login', user);
  }
}
