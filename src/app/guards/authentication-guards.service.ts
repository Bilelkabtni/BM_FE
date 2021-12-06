import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationGuardService implements CanActivateChild {
  isAuthenticated: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    if (this.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
