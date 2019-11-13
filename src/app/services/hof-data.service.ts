import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HofDataService {
  // get data method
  getData(): Observable<any> {
    return this.http.get(
      'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json'
    );
  }

  constructor(private http: HttpClient) {}
}
