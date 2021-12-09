import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersRoutingModule } from './user-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
    declarations: [
        UsersComponent,
        UserListComponent,
        UserCreateComponent,
        UserEditComponent,
        UserFormComponent,
        UserDetailsComponent,
    ],
    imports: [UsersRoutingModule, SharedModule],
    exports: [UsersComponent],
})
export class UsersModule {}
