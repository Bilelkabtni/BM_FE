import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from './home.service';

export interface IGenders {
    id: number;
    name: string;
}

export type UserFormBody = Pick<IUsers, 'email' | 'first_name' | 'last_name' | 'gender_id' | 'language' | 'password'>;

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getGender(): Observable<IGenders[]> {
        return this.http.get<IGenders[]>('/api/genders');
    }

    createUser(user: UserFormBody): Observable<IUsers> {
        return this.http.post<IUsers>('/api/users', user);
    }
}
