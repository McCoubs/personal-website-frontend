import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectEulerComponent } from './project-euler.component';
import { ProjectEulerRoutingModule } from './project-euler-routing.module';

@NgModule({
  declarations: [ProjectEulerComponent],
  imports: [
    CommonModule,
    ProjectEulerRoutingModule,
  ]
})
export class ProjectEulerModule { }
