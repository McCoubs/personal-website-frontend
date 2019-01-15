import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectEulerService } from '../project-euler.service';

@Component({
  selector: 'app-largest-continuous-product',
  templateUrl: './largest-continuous-product.component.html',
  styleUrls: ['./largest-continuous-product.component.scss']
})
export class LargestContinuousProductComponent {

  loading = false;
  output: number;
  alertMessage: string;
  @ViewChild('inputSeries') inputSeries: ElementRef;
  @ViewChild('inputAdjacent') inputAdjacent: ElementRef;

  constructor(private projectEulerService: ProjectEulerService) {}

  largestContinuousProduct(inputSeries: number, inputAdjacent: number): void {
    if (!inputSeries || !inputAdjacent) {
      this.alertMessage = 'please input a selection before submitting';
    } else {
      // reset vars
      this.alertMessage = null;
      this.loading = true;
      this.output = null;
      // hit api for value
      this.projectEulerService.largestContinuousProduct(inputSeries, inputAdjacent).subscribe(
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

  generateExample() {
    // generate length between 10 and 50
    let length = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    // generate random adjacent length
    let adjacent = Math.floor(Math.random() * 10) + 1;

    let series: number | string = '';
    // generate a series of random length of digits 0-9
    for (let i = 0; i < length; i++) {
      series += Math.floor(Math.random() * 10);
    }

    // display values for user
    this.inputSeries.nativeElement.value = series;
    this.inputAdjacent.nativeElement.value = adjacent;

    // hit api for values
    this.largestContinuousProduct(series, adjacent);
  }
}
