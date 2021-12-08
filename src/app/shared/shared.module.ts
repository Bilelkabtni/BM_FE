import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { AlertComponent } from './components/alert/alert.component';
import { ContentComponent } from './components/content/content.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
    declarations: [AlertComponent, NavComponent, ContentComponent],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    exports: [AlertComponent, ReactiveFormsModule, NavComponent, ContentComponent],
})
export class SharedModule {}
