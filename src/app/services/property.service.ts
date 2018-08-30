import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Property } from '../models/property.model';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private serviceUrl = 'http://localhost:3000/property';
  constructor(private http: HttpClient) { }
  getProperty(): Observable<Property[]> {
    return this.http.get<Property[]>(this.serviceUrl);
  }
}



