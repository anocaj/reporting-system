import { Test, TestingModule } from '@nestjs/testing';
import { REPORTS } from '../data-reports';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

describe('ReportsController', () => {
  let controller: ReportsController;
  let reportsService: ReportsController;
  const reports = REPORTS;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [ReportsService],
    }).compile();

    reportsService = await module.resolve(ReportsService);
    controller = module.get<ReportsController>(ReportsController);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('should return all reports', async () => {
      jest.spyOn(reportsService, 'findAll').mockImplementation(() => reports);
      expect(await controller.findAll()).toBe(reports);
    });
  });
  
});
