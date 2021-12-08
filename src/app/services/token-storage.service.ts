import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root',
})
export class TokenStorageService {
    constructor(public jwtHelper: JwtHelperService) {}

    signOut(): void {
        window.localStorage.clear();
    }

    public saveToken(token: string): void {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    public isAuthenticated(): boolean {
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(this.getToken());
    }
}
