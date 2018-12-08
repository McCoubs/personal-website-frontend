// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProjectEulerComponent } from './project-euler.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectEulerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectEulerRoutingModule {}

