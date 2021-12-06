import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeModule } from "./home/src/lib/home.module";
import { ProjectsRoutingModule } from "./projects-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, HomeModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
