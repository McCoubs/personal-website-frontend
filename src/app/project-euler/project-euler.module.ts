import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectEulerComponent } from './project-euler.component';
import { ProjectEulerRoutingModule } from './project-euler-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SumSquareDifferenceComponent } from './sum-square-difference/sum-square-difference.component';
import { AdDirective } from '../ad.directive';
import { FindNthPrimeComponent } from './find-nth-prime/find-nth-prime.component';
import { LargestContinuousProductComponent } from './largest-continuous-product/largest-continuous-product.component';
import { LargestPrimeFactorComponent } from './largest-prime-factor/largest-prime-factor.component';
import { PythagoreanTripletsComponent } from './pythagorean-triplets/pythagorean-triplets.component';

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
    ProjectEulerRoutingModule,
    SharedModule
  ],
  entryComponents: [
    SumSquareDifferenceComponent,
    FindNthPrimeComponent,
    LargestContinuousProductComponent,
    LargestPrimeFactorComponent,
    PythagoreanTripletsComponent
  ]
})
export class ProjectEulerModule { }
