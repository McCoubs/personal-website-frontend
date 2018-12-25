import { Component } from '@angular/core';
import { ProjectEulerService } from '../project-euler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarOpen = false;

  constructor(private projectEuler: ProjectEulerService) {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.projectEuler.testEndpoint();
  }
}
