import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarOpen = false;

  constructor(private router: Router) {
    // listen to when routing has ended
    router.events.pipe(filter((event: RouterEvent) => !!event && event instanceof NavigationEnd)).subscribe((event: RouterEvent) => {
        // close all dropdowns and close menu
        this.resetDropdowns();
        this.navbarOpen = false;
      }
    );
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.resetDropdowns();
  }

  openDropdown($event) {
    const dropdown = $event.target.nextElementSibling;
    dropdown.classList.toggle('show');
  }

  resetDropdowns() {
    // un-open all dropdowns and close menu
    const dropdowns = document.getElementsByClassName('navbar-nav')[0].querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => dropdown.classList.remove('show'));
  }
}
