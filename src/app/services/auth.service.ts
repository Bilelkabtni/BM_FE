import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginApiResponse, IUser } from '../auth/types/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private httpClient: HttpClient) {}

    login(user: IUser): Observable<ILoginApiResponse> {
        return this.httpClient.post<ILoginApiResponse>('http://localhost:3000/login', user);
    }
}
