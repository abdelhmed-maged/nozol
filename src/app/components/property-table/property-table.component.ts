import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Property } from '../../models/property.model';
@Component({
  selector: 'app-property-table',
  templateUrl: './property-table.component.html',
  styleUrls: ['./property-table.component.css']
})
export class PropertyTableComponent implements OnInit {
  dataSource = new PropertyDataSource(this.propertyService);
  displayedColumns = ['owner', 'status', 'address', '_id'];
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

}


export class PropertyDataSource extends DataSource<any> {
  constructor(private propertyService: PropertyService) {
    super();
  }
  connect(): Observable<Property[]> {
    return this.propertyService.getProperty();
  }
  disconnect() {}

  
}
