import { Component, OnInit } from "@angular/core";
import { UiReportItem } from "@reporting-system/api-interfaces";
const testItem:UiReportItem = {id:"1",message:"Hallo",state:"OPEN",type:"SPAM"};
@Component({
  selector: 'reporting-system-reports',
  template: `
   <reporting-system-list [spamList]="(UiReportItems)" (blockReport)="blockReportItem($event)" (resolveReport)="resolveReportItem($event)"></reporting-system-list>
  `,
  styles: [
  ]
})
export class ReportsComponent implements OnInit  {
  UiReportItems: UiReportItem[] = []

  ngOnInit() {
    this.UiReportItems = [testItem,testItem,testItem,testItem,testItem]
  }

  blockReportItem(id: string) {
    console.log(id)
  }
  resolveReportItem(id: string) {
    console.log(id)
  }

}
