import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarOpen = false;

  constructor(private router: Router) {
    // listen to router changes
    router.events.subscribe((event) => {
        // if routing stopped
        if (event instanceof NavigationEnd) {
          // un-open all dropdowns and close menu
          let dropdowns = document.getElementsByClassName('navbar-nav')[0].querySelectorAll('.dropdown');
          dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove('show');
          });
          this.navbarOpen = false;
        }
      }
    );
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  openDropdown($event) {
    const dropdown = $event.target.nextElementSibling;
    dropdown.classList.toggle('show');
  }
}
