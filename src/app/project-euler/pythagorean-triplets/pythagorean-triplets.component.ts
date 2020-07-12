import { Component } from '@angular/core';
import { ProjectEulerService } from '../project-euler.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pythagorean-triplets',
  templateUrl: './pythagorean-triplets.component.html',
  styleUrls: ['./pythagorean-triplets.component.scss']
})
export class PythagoreanTripletsComponent {

  loading = false;
  output: number;
  alertMessage: string;

  faSpinner = faSpinner;

  constructor(private projectEulerService: ProjectEulerService) {}

  pythagoreanTriplets(inputNumber: number): void {
    if (!inputNumber) {
      this.alertMessage = 'please input a selection before submitting';
    } else {
      // reset vars
      this.alertMessage = null;
      this.loading = true;
      this.output = null;
      // hit api for value
      this.projectEulerService.pythagoreanTriplets(inputNumber).subscribe(
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
