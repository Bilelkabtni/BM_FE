import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { EMAIL_REGEX } from './email-regex';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
    loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
        password: new FormControl('', Validators.required),
    });
    constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) {}
    get emailField(): ValidationErrors | null {
        return this.loginForm.get('email');
    }
    get passwordField(): ValidationErrors | null {
        return this.loginForm.get('password');
    }

    login(): void {
        this.authService.login(this.loginForm.value).subscribe((data) => {
            this.tokenStorage.saveToken(data.accessToken);
            this.router.navigate(['/home']);
        });
    }
}
