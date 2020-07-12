import { Component } from '@angular/core';
import { faAngular, faReact, faNodeJs, faJsSquare, faCss3Alt, faHtml5, faPython, faJava, faAccessibleIcon, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faDatabase, faSyncAlt, faGamepad, faBookReader, faTv, faUsers, faTerminal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  faAngular = faAngular;
  faReact = faReact;
  faNodeJs = faNodeJs;
  faJsSquare = faJsSquare;
  faCss3Alt = faCss3Alt;
  faHtml5 = faHtml5;
  faPython = faPython;
  faJava = faJava;
  faAccessibleIcon = faAccessibleIcon;
  faLaptopCode = faLaptopCode;
  faDatabase = faDatabase;
  faSyncAlt = faSyncAlt;
  faDocker = faDocker;
  faGamepad = faGamepad;
  faBookReader = faBookReader;
  faTv = faTv;
  faUsers = faUsers;
  faTerminal = faTerminal;

  constructor() {}
}
