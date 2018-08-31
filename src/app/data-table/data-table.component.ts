import {Component, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
// import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { SortService } from "./sort-service.service";
import {Subscription} from "rxjs/Rx";
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit ,OnDestroy {
  sortedCollection: any[];
  order: string = 'owner';
reverse= false;
  p: number = 1;

  constructor(private sortService: SortService, private orderPipe: OrderPipe) {

    this.sortedCollection = orderPipe.transform(this.dataObj, 'dataObj._id');
  }
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;
  keyword = '';
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'status', 'owner', 'createdAt', 'notes','bathroomNo', 'address'];
  dataObj =
    [
      {
        "status": "active",
        "address": [
          1,
          2,
          3
        ],
        "notes": [
          "testing"
        ],
        "_id": "5b83cd9c278cd72de91bd877",
        "owner": "Mona",
        "createdAt": "2018-08-27T10:08:28.527Z"
      },
      {
        "status": "active",
        "address": [
          1,
          2,
          3
        ],
        "notes": [
          "testing"
        ],
        "_id": "5b8445a7fe02507394de28f4",
        "owner": "Ahmed",
        "createdAt": "2018-08-27T18:40:39.112Z"
      },
      {
        "status": "Finished",
        "address": [
          1,
          2,
          3
        ],
        "notes": [
          "testing"
        ],
        "_id": "5b8445a7fe02507394de28f4",
        "owner": "B",
        "createdAt": "2022-08-27T18:40:39.112Z"
      }
    ];




  ngOnInit() {
    // this.dataSource = new DataTableDataSource(this.paginator, this.sort);
    // console.log(this.dataSource);


  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  receiveSearchKeyword($event) {
    this.keyword = $event
  }

  ngOnDestroy() {
  }

}
