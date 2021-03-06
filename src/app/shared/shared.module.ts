import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertComponent } from './components/alert/alert.component';
import { LoadingIndicatorComponent } from './components/loading-indcator/loading-indcator.component';
import { TableComponent } from './components/table/table.component';
import { GenderPipe } from './pipes/gender.pipe';
import { ContentComponent } from './templates/content/content.component';
import { NavComponent } from './templates/nav/nav.component';

@NgModule({
    declarations: [
        AlertComponent,
        NavComponent,
        ContentComponent,
        TableComponent,
        LoadingIndicatorComponent,
        GenderPipe,
    ],

    imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule, NgxPaginationModule],
    exports: [
        CommonModule,
        AlertComponent,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        NavComponent,
        ContentComponent,
        TableComponent,
        NgxPaginationModule,
        GenderPipe,
    ],
})
export class SharedModule {}
