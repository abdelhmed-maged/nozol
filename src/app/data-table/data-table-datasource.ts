import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  id: number;
  name: string;
  status: string;
  owner: string;
  createdAt: string;
  notes: object;
  bathroomNo: number;
  address: object;
  _id: string;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 1, name: 'Hydrogen', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  {id: 2, name: 'Helium', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  {id: 3, name: 'Lithium', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  {id: 4, name: 'Beryllium', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
  {id: 5, name: 'Boron', status:'active', owner:'Mona', createdAt: '2018-08-27T18:40:39.112Z', notes: ["testing"], bathroomNo:10, address: [ 1, 2, 3 ], _id: '5b8445a7fe02507394de28f4'},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'gender': return compare(a.status, b.status, isAsc);
        case 'owner': return compare(a.owner, b.owner, isAsc);
        case 'createdAt': return compare(a.createdAt, b.createdAt, isAsc);
        default: return 0;
      }
    });
  }
}



/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
