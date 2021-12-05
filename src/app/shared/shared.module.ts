import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AlertComponent } from "./components/alert/alert.component";

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AlertComponent, ReactiveFormsModule],
})
export class SharedModule {}
