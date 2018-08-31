import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }

  sendSearchKeyword(searchKeyword: string) {
    // send the search keyword when updated
    // value='';
    this.searchEvent.emit(searchKeyword);
    console.log(Event);

  }

}
