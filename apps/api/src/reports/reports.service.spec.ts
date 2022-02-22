import { Test, TestingModule } from '@nestjs/testing';
import { BlockReportDto, Report, ReportStates, ResolveReportDto } from '@reporting-system/api-interfaces';
import { REPORTS } from '../data-reports';
import { ReportsService } from './reports.service';

describe('ReportsService', () => {
  let service: ReportsService;
  let reports: Report[] = []

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportsService],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
    reports = REPORTS
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all reports', () => {
    expect(service.findAll()).toEqual(reports);
  });

  it('should return find one report', () => {
    expect(service.findOne(reports[0].id)).toEqual(reports[0]);
  });

  it('should resolve report in reports', () => {
    const resolvePayload: ResolveReportDto = { ticketState: 'RESOLVED' };
    // expect(service.findAll()).toBe(reports);
    service.update(reports[0].id, resolvePayload)
    expect(service.findOne(reports[0].id).state).toEqual(ReportStates.RESOLVED);

  });

  it('should block report in reports', () => {
    const blockPayload: BlockReportDto = { ticketState: ReportStates.BLOCKED };
    // expect(service.findAll()).toBe(reports);
    service.update(reports[0].id, blockPayload)
    expect(service.findOne(reports[0].id).state).toEqual(ReportStates.BLOCKED);
  });

});
