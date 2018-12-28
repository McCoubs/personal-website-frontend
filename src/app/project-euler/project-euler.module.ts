import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectEulerComponent } from './project-euler.component';
import { ProjectEulerRoutingModule } from './project-euler-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProjectEulerComponent],
  imports: [
    CommonModule,
    ProjectEulerRoutingModule,
    SharedModule
  ]
})
export class ProjectEulerModule { }
