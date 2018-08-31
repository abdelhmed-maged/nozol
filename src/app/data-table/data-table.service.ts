import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { Observable } from "rxjs";
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Rx';

import { dataOb } from "./data-object-interface";
@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private http: HttpClient,) { }

  //   const EXAMPLE_DATA: DataTableItem[] = [
  //   {id: 1, name: 'Hydrogen', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  //   {id: 2, name: 'Helium', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  //   {id: 3, name: 'Lithium', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  //   {id: 4, name: 'Beryllium', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  //   {id: 5, name: 'Boron', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  // ];
  
  private url: string = "http://localhost:3000/property";
  getData(): Observable<dataOb[]>{
    return this.http.get<dataOb[]>(this.url);
  }
  // updateRequestStatus(id: number, status: string) {
  //   return this.http.post( 'http://localhost:3000/property', {
  //     // id: id,
  //     // status: status
     
  //   })
  //     .map((response: Response) => response.json());
  //     console.log(Response);

  // }
}
