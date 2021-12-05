import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { TokenStorageService } from "src/app/services/token-storage.service";
import { EMAIL_REGEX } from "./email-regex";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(EMAIL_REGEX),
    ]),
    password: new FormControl("", Validators.required),
  });

  ngOnInit(): void {}

  get emailField(): ValidationErrors | null {
    return this.loginForm.get("email");
  }

  get passwordField(): ValidationErrors | null {
    return this.loginForm.get("password");
  }

  login(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((data) => {
      this.tokenStorage.saveToken(data.accessToken);
    });
  }

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder
  ) {}
}
