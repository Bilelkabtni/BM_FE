import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [LoginComponent],
    providers: [AuthService],
    imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
