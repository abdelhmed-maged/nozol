import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response, ResponseContentType} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private http: Http,) { }

  updateRequestStatus(id: number, status: string, reason?: string, note?: string, completion_time?: number, completion_time_text?: string) {


    return this.http.post( '/api/update-request', {
      id: id,
      status: status
     
    })
      .map((response: Response) => response.json());
  }
}
