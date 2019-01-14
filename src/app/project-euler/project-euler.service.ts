import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectEulerService {

  constructor(private http: HttpClient) {}

  findNthPrime(nth_prime: number): Observable<Object> {
    return this.http.get(environment.apiEndpoint + '/find_nth_prime?value=' + nth_prime);
  }
}
