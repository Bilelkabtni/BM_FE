import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // children: [
        //     {
        //         path: 'create',
        //         component: UserCreateComponent,
        //     },
        //     {
        //         path: 'edit',
        //         component: UserEditComponent,
        //     },
        //     {
        //         path: ':/id',
        //         component: UserDetailsComponent,
        //     },
        // ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
