import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-euler',
  templateUrl: './project-euler.component.html',
  styleUrls: ['./project-euler.component.scss']
})
export class ProjectEulerComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() {}

  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
