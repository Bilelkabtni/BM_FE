import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeModule } from 'projects/home/src/lib/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

export function tokenGetter() {
    return localStorage.getItem('auth-token');
}
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ['http://localhost:4200/'],
            },
        }),
        AppRoutingModule,
        SharedModule,
        HomeModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
