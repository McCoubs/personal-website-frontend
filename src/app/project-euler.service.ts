import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectEulerService {

  constructor(private http: HttpClient) {}

  testEndpoint() {
    this.http.get(environment.apiEndpoint + '/test/1').subscribe(
      (next) => console.log(next),
      (error) => console.log(error)
    );
  }
}
