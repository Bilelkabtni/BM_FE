import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/src/lib/home.module';
import { ProjectsRoutingModule } from './projects-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
