import { Injectable, Logger } from '@nestjs/common';
import { CreateReportDto, Report, ReportState, ReportStates, UpdateReportDto } from '@reporting-system/api-interfaces';
import { REPORTS } from "../data-reports"
@Injectable()
export class ReportsService {
  private reports: Report[] = []

  constructor() {
    this.reports = REPORTS
  }
  
  create(createReportDto: CreateReportDto) {
    return 'This action adds a new report';
  }

  findAll() {
    return this.reports.filter(report => report.state !== ReportStates.RESOLVED);
  }

  findOne(id: string) {
    return this.reports.find(report => report.id === id);
  }

  update(id: string, updateReportDto: UpdateReportDto) {
    let report = this.findOne(id);

    if (!report) {
      const errorMessage = `Report not found with Id: ${id}`
      Logger.error(errorMessage)
      return errorMessage
    }
    switch (updateReportDto.ticketState) {
      case "RESOLVED":
        report = this.resolve(report)
        break;
      case "BLOCKED":
        report = this.block(report)
        break;
      default:
        break;
    }

    this.updateReports(report)
    return;
  }

  remove(id: string) {
    return `This action removes a #${id} report`;
  }

  private updateReports(newReport: Report) {
    this.reports = [...this.reports.filter(report => report.id !== newReport.id), newReport]
  }
  private resolve(report: Report) {
    return this.updateState(report, ReportStates.RESOLVED);
  }
  private block(report: Report) {
    return this.updateState(report, ReportStates.BLOCKED);
  }
  private updateState(report: Report, newState: ReportState) {
    return { ...report, state: newState }
  }
}
