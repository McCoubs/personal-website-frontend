import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SumSquareDifferenceComponent } from './sum-square-difference/sum-square-difference.component';
import { FindNthPrimeComponent } from './find-nth-prime/find-nth-prime.component';
import { LargestContinuousProductComponent} from './largest-continuous-product/largest-continuous-product.component';
import { LargestPrimeFactorComponent } from './largest-prime-factor/largest-prime-factor.component';
import { PythagoreanTripletsComponent } from './pythagorean-triplets/pythagorean-triplets.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectEulerService {

  constructor(private http: HttpClient) {}

  testEndpoint() {
    this.http.get(environment.apiEndpoint + '/test/1').subscribe(
      (next) => console.log(next),
      (error) => console.log(error)
    );
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
}
