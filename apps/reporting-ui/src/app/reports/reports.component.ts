import { Component, OnInit } from "@angular/core";
import { ReportsEntity } from "@reporting-system/api-interfaces";
import { select, Store } from '@ngrx/store';
import { init } from "../state/reports.actions";
import { getAllReports } from "../state/reports.selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'reporting-system-reports',
  template: `
   <reporting-system-list [spamList]="(reportsEntitys$ | async)" (blockReport)="blockReportItem($event)" (resolveReport)="resolveReportItem($event)"></reporting-system-list>
  `,
  styles: [
  ]
})
export class ReportsComponent implements OnInit  {
  reportsEntitys$: Observable<ReportsEntity[]> | undefined

  constructor(private store: Store){}
  ngOnInit() {
    this.store.dispatch(init());
    this.reportsEntitys$ = this.store.pipe(select(getAllReports));
  }

  blockReportItem(id: string) {
    console.log(id)
  }
  resolveReportItem(id: string) {
    console.log(id)
  }

}
