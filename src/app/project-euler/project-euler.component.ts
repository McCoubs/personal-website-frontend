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
  currentProject: string;
  projectsList: Array<Object>;
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(private projectEulerService: ProjectEulerService, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.projectsList = this.projectEulerService.getProjectsList();
  }

  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  selectProject(project) {
    this.sideBarToggle();
    if (this.currentProject !== project['name']) {
      this.currentProject = project['name'];
      // dynamically insert component into directive
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(project['component']);
      let viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
    }
  }
}
