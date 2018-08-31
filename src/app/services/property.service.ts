import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Property } from '../models/property.model';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  // const EXAMPLE_DATA: DataTableItem[] = [
  //   {id: 1, name: 'Hydrogen', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  //   {id: 2, name: 'Helium', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  //   {id: 3, name: 'Lithium', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  //   {id: 4, name: 'Beryllium', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  //   {id: 5, name: 'Boron', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  // ];
  //

  private serviceUrl = 'http://localhost:3000/property';
  constructor(private http: HttpClient) { }
  getProperty(): Observable<Property[]> {
    return this.http.get<Property[]>(this.serviceUrl);
  }
}



