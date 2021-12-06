import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardService } from './guards/authentication-guards.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'projects',
        loadChildren: () => import('../../projects/projects.module').then((m) => m.ProjectsModule),
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
