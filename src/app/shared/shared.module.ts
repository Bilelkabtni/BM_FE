import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { ContentComponent } from './templates/content/content.component';
import { NavComponent } from './templates/nav/nav.component';

@NgModule({
    declarations: [AlertComponent, NavComponent, ContentComponent],

    imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
    exports: [
        CommonModule,
        AlertComponent,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        NavComponent,
        ContentComponent,
    ],
})
export class SharedModule {}
