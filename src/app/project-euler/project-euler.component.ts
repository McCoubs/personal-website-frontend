import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ProjectEulerService } from './project-euler.service';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-project-euler',
  templateUrl: './project-euler.component.html',
  styleUrls: ['./project-euler.component.scss']
})
export class ProjectEulerComponent implements OnInit {

  sideBarOpen = true;
  currentProject = {};
  projectsList: Array<Object>;
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(private projectEulerService: ProjectEulerService, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.projectsList = this.projectEulerService.getProjectsList();
    this.selectProject(this.projectsList[Math.floor(Math.random() * this.projectsList.length)]);
  }

  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  selectProject(project) {
    this.sideBarToggle();
    if (this.currentProject['name'] !== project['name']) {
      this.currentProject = project;
      // dynamically insert component into directive
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(project['component']);
      let viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
    }
  }
}
