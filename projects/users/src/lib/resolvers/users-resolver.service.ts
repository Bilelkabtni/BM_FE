import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Users } from '../models/user.model';
import { UserService } from '../user.service';

@Injectable({
    providedIn: 'root',
})
export class UsersResolverService implements Resolve<Users> {
    constructor(private userService: UserService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Users> {
        if (route.paramMap.has('id')) {
            const id = route.paramMap.get('id');

            return this.userService.getUserById(id).pipe(
                take(1),
                map((user) => {
                    if (user) {
                        return user;
                    } else {
                        // id not found
                        this.router.navigate(['/users']);
                        return null;
                    }
                })
            );
        } else {
            return of(new Users(null));
        }
    }
}
