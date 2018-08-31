import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { PropertyService } from './services/property.service';
//import { UsertableComponent } from './components/usertable/usertable.component';
import { PropertyTableComponent } from './components/property-table/property-table.component';
import { FilterComponentComponent } from './data-table/filter-component/filter-component.component';
import { SortableTableDirective } from './data-table/sortable-table.directive';

import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    //UsertableComponent,
    PropertyTableComponent,
    FilterComponentComponent,
    SortableTableDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    OrderModule, // <- import OrderModule
    NgxPaginationModule

  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
