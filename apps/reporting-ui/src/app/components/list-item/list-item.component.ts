import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UiReportItem } from '@reporting-system/api-interfaces';

@Component({
  selector: 'reporting-system-list-item',
  template: `
     <div class="container flex border-b-2 flex-row p-2">
    <div class="basis-2/12 flex-1 flex-col">
      <div>Id: {{item?.id}}</div>
      <div>State: {{item?.state}}</div>
      <div class="text-blue-400 underline">Details</div>
    </div>
    <div class="basis-7/12 flex flex-1 flex-col">
      <div>Type: {{item?.type}}</div>
      <div class="line-clamp-2"> Message: {{item?.message ? item?.message : "-"}}</div>
    </div>
    <div class="basis-2/12 basis flex flex-1 flex-col justify-center items-end">
        <button (click)="blockReportItem(item.id)" class="border-slate-400 border rounded-md w-24 h-8  bg-slate-200 hover:bg-slate-400 mb-1" type="button">Block</button>
        <button (click)="resolveReportItem(item.id)" class="border-slate-400 border rounded-md w-24 h-8 bg-slate-200 hover:bg-slate-400" type="button">Resolve</button>
    </div>
   
  </div>
  `,
  styles: [
  ]
})
export class ListItemComponent {
  @Input()
  item!: UiReportItem;

  @Output()
  blockReport = new EventEmitter<string>();
  @Output()
  resolveReport = new EventEmitter<string>();

  blockReportItem(id: string) {
    this.blockReport.emit(id);
  }
  resolveReportItem(id: string) {
    this.resolveReport.emit(id);
  }
}
