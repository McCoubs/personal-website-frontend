import { Component } from '@angular/core';
import { ProjectEulerService } from '../project-euler.service';

@Component({
  selector: 'app-find-nth-prime',
  templateUrl: './find-nth-prime.component.html',
  styleUrls: ['./find-nth-prime.component.scss']
})
export class FindNthPrimeComponent {

  loading = false;
  output: number;
  alertMessage: string;

  constructor(private projectEulerService: ProjectEulerService) {}

  findNthPrime(nthPrime: number): void {
    if (!nthPrime) {
      this.alertMessage = 'please input a selection before submitting';
    } else {
      this.loading = true;
      this.output = null;
      this.projectEulerService.findNthPrime(nthPrime).subscribe(
        (value) => {
          this.loading = false;
          this.output = value['result'];
        },
        (error) => {
          this.loading = false;
          this.alertMessage = error['message'] || 'there was an issue calculating result, please refresh and/or try again';
        }
      );
    }
  }

  ordinalSuffix(i: number): string {
    let j = i % 10;
    let k = i % 100;
    if (j === 1 && k !== 11) {
      return i + 'st';
    }
    if (j === 2 && k !== 12) {
      return i + 'nd';
    }
    if (j === 3 && k !== 13) {
      return i + 'rd';
    }
    return i + 'th';
  }
}
