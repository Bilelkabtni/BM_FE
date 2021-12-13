import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersResolverService } from './resolvers/users-resolver.service';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UserListComponent,
            },
            {
                path: 'create',
                component: UserCreateComponent,
            },
            {
                path: ':id/edit',
                component: UserEditComponent,
                resolve: {
                    user: UsersResolverService,
                },
            },
            {
                path: ':id',
                component: UserDetailsComponent,
                resolve: {
                    data: UsersResolverService,
                },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [UsersResolverService],
})
export class UsersRoutingModule {}
