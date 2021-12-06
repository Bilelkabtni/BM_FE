import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { TokenStorageService } from "src/app/services/token-storage.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  constructor(
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  signOut(): void {
    this.tokenStorage.signOut();
    this.authService.isAuthenticated$.next(false);
    this.router.navigate(["login"]);
  }
}
