import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockReportDto, Report, ReportsEntity, ReportStates, ResolveReportDto } from '@reporting-system/api-interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  getReports$(): Observable<ReportsEntity[]> {
    const reports$ = this.http.get<Report[]>('/api/reports');
    const ReportsEntitys$: Observable<ReportsEntity[]> = reports$.pipe(
      map((reports: Report[]): ReportsEntity[] => this._parseReportsToUiSpamItems(reports))
    )
    return ReportsEntitys$
  }

  blockReport(id: string) {
    const blockReportPayload: BlockReportDto = {
      ticketState: ReportStates.BLOCKED
    }
    const result$ = this.http.put(`/api/reports/${id}`, blockReportPayload);
    return result$
  }

  resolveReport(id: string) {
    const resolveReportPayload: ResolveReportDto = {
      ticketState: ReportStates.RESOLVED
    }
    const result$ = this.http.put(`/api/reports/${id}`, resolveReportPayload);
    return result$
  }

  private _parseReportsToUiSpamItems(reports: Report[]): ReportsEntity[] {
    return reports.map(report => ({
      id: report.id,
      type: report.payload.reportType,
      state: report.state,
      message: report.payload.message
    }))
  }
}