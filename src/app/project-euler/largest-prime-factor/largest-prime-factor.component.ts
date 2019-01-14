import { Component } from '@angular/core';
import { ProjectEulerService } from '../project-euler.service';

@Component({
  selector: 'app-largest-prime-factor',
  templateUrl: './largest-prime-factor.component.html',
  styleUrls: ['./largest-prime-factor.component.scss']
})
export class LargestPrimeFactorComponent {

  loading = false;
  output: number;
  alertMessage: string;

  constructor(private projectEulerService: ProjectEulerService) {}

  largestPrimeFactor(inputNumber: number): void {
    if (!inputNumber) {
      this.alertMessage = 'please input a selection before submitting';
    } else {
      // reset vars
      this.alertMessage = null;
      this.loading = true;
      this.output = null;
      // hit api for value
      this.projectEulerService.largestPrimeFactor(inputNumber).subscribe(
        // on success display and stop loading
        (value) => {
          this.loading = false;
          this.output = value['result'];
        },
        // on error show given error or generic one and stop loading
        (error) => {
          this.loading = false;
          this.alertMessage = error['error']['message'] || 'there was an issue calculating result, please refresh and/or try again';
        }
      );
    }
  }
}
