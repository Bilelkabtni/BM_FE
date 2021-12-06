import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
    declarations: [AlertComponent],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [AlertComponent, ReactiveFormsModule],
})
export class SharedModule {}
