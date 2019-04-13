import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ProjectEulerService } from './project-euler.service';
import { AdDirective } from '../ad.directive';
import { SumSquareDifferenceComponent } from './sum-square-difference/sum-square-difference.component';
import { FindNthPrimeComponent } from './find-nth-prime/find-nth-prime.component';
import { LargestContinuousProductComponent } from './largest-continuous-product/largest-continuous-product.component';
import { LargestPrimeFactorComponent } from './largest-prime-factor/largest-prime-factor.component';
import { PythagoreanTripletsComponent } from './pythagorean-triplets/pythagorean-triplets.component';

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
    this.projectsList = this.getProjectsList();
    this.selectProject(this.projectsList[Math.floor(Math.random() * this.projectsList.length)]);
  }

  getProjectsList() {
    return [
      {
        name: 'Sum Square Difference',
        component: SumSquareDifferenceComponent,
      },
      {
        name: 'Find Nth Prime',
        component: FindNthPrimeComponent,
      },
      {
        name: 'Largest Continuous Product',
        component: LargestContinuousProductComponent,
      },
      {
        name: 'Largest Prime Factor',
        component: LargestPrimeFactorComponent,
      },
      {
        name: 'Pythagorean Triplets',
        component: PythagoreanTripletsComponent,
      }
    ];
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
