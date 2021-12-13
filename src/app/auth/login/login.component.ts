import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { EMAIL_REGEX } from './email-regex';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
        password: new FormControl('', Validators.required),
    });

    showError = false;

    get emailField(): ValidationErrors | null {
        return this.loginForm.get('email');
    }
    get passwordField(): ValidationErrors | null {
        return this.loginForm.get('password');
    }

    constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) {}

    login(): void {
        this.showError = false;
        this.authService
            .login(this.loginForm.value)
            .pipe(
                first(),
                catchError((_) => {
                    this.showError = true;
                    return EMPTY;
                })
            )
            .subscribe((data) => {
                this.tokenStorage.saveToken(data.accessToken);
                this.router.navigate(['/home']);
            });
    }
}
