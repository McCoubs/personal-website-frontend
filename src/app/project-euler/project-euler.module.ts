// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectEulerRoutingModule } from './project-euler-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { ProjectEulerComponent } from './project-euler.component';
import { SumSquareDifferenceComponent } from './sum-square-difference/sum-square-difference.component';
import { FindNthPrimeComponent } from './find-nth-prime/find-nth-prime.component';
import { LargestContinuousProductComponent } from './largest-continuous-product/largest-continuous-product.component';
import { LargestPrimeFactorComponent } from './largest-prime-factor/largest-prime-factor.component';
import { PythagoreanTripletsComponent } from './pythagorean-triplets/pythagorean-triplets.component';

// services
import { ProjectEulerService } from './project-euler.service';

// directives
import { AdDirective } from '../ad.directive';

@NgModule({
  declarations: [
    AdDirective,
    ProjectEulerComponent,
    SumSquareDifferenceComponent,
    FindNthPrimeComponent,
    LargestContinuousProductComponent,
    LargestPrimeFactorComponent,
    PythagoreanTripletsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectEulerRoutingModule
  ],
  entryComponents: [
    SumSquareDifferenceComponent,
    FindNthPrimeComponent,
    LargestContinuousProductComponent,
    LargestPrimeFactorComponent,
    PythagoreanTripletsComponent
  ],
  providers: [
    ProjectEulerService
  ]
})
export class ProjectEulerModule { }
