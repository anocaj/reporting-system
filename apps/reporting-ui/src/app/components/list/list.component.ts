import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UiReportItem } from '@reporting-system/api-interfaces';

@Component({
  selector: 'reporting-system-list',
  template: `
    <div *ngFor="let item of spamList">
      <reporting-system-list-item [item]="item" (blockReport)="_blockReport($event)" (resolveReport)="_resolveReport($event)"></reporting-system-list-item>
    </div>
  `,
  styles: [
  ]
})
export class ListComponent{
  @Input()
  spamList?: UiReportItem[] | null

  @Output()
  blockReport = new EventEmitter<string>();
  @Output()
  resolveReport = new EventEmitter<string>();


  _blockReport(id: string) {
    this.blockReport.emit(id)
  }
  _resolveReport(id: string) {
    this.resolveReport.emit(id)
  }
}
