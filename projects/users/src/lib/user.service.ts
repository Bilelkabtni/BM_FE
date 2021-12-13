import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from '@services/home.service';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IGenders {
    id: number;
    name: string;
}

export type UserFormBody = Pick<IUsers, 'email' | 'first_name' | 'last_name' | 'gender_id' | 'language' | 'password'>;

@Injectable({
    providedIn: 'root',
})
export class UserService {
    refreshed$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    constructor(private http: HttpClient) {}

    getGender(): Observable<IGenders[]> {
        return this.http.get<IGenders[]>('/api/genders');
    }

    createUser(user: UserFormBody): Observable<IUsers> {
        return this.http.post<IUsers>('/api/users', user);
    }

    updateUser(user: UserFormBody, id: number): Observable<IUsers> {
        return this.http.patch<IUsers>(`/api/users/${id}`, user);
    }

    deleteUser(userId: number): Observable<IUsers> {
        return this.http.delete<IUsers>(`/api/users/${userId}`);
    }

    getUserById(userId: string): Observable<IUsers> {
        return this.http.get<IUsers>(`/api/users/${userId}`);
    }
}
