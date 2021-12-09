import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardService } from './guards/authentication-guards.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'home',
        loadChildren: () => import('../../projects/home/src/lib/home.module').then((m) => m.HomeModule),
        canActivateChild: [AuthenticationGuardService],
    },
    {
        path: 'users',
        loadChildren: () => import('../../projects/users/src/lib/users.module').then((m) => m.UsersModule),
        canActivateChild: [AuthenticationGuardService],
    },
    {
        path: '**',
        redirectTo: '/',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            onSameUrlNavigation: 'reload',
            relativeLinkResolution: 'legacy',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
