import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'project-euler',
    loadChildren: () => import('./project-euler/project-euler.module').then(m => m.ProjectEulerModule)
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
