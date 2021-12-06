import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginApiResponse, IUser } from '../auth/types/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private httpClient: HttpClient) {}

    login(user: IUser): Observable<ILoginApiResponse> {
        return this.httpClient.post<ILoginApiResponse>('/login', user);
    }
}
