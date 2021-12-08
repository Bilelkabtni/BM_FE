import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeService } from '../services/home.service';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HttpClientModule, SharedModule, HomeRoutingModule],
    providers: [HomeService],
    exports: [HomeComponent],
})
export class HomeModule {}
