import { Component } from '@angular/core';
import { ProjectEulerService } from '../project-euler.service';

@Component({
  selector: 'app-sum-square-difference',
  templateUrl: './sum-square-difference.component.html',
  styleUrls: ['./sum-square-difference.component.scss']
})
export class SumSquareDifferenceComponent {

  loading = false;
  output: number;
  alertMessage: string;

  constructor(private projectEulerService: ProjectEulerService) {}

  sumSquareDifference(inputNumber: number): void {
    if (!inputNumber) {
      this.alertMessage = 'please input a selection before submitting';
    } else {
      // reset vars
      this.alertMessage = null;
      this.loading = true;
      this.output = null;
      // hit api for value
      this.projectEulerService.sumSquareDifference(inputNumber).subscribe(
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
