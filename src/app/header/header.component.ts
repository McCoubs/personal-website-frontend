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

  toggleDropdown(element) {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent) ) {
      let dropdown = undefined;
      let parent = element;
      while (!dropdown) {
        dropdown = parent.getElementsByClassName('dropdown')[0];
        parent = parent.parentElement;
      }
      dropdown.classList.toggle('show');
    }
  }
}
