import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarOpen = false;

  constructor() {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
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
