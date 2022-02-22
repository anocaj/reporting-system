import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [AppComponent, ListItemComponent, ListComponent, ReportsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
