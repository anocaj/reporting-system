import { createAction, props } from '@ngrx/store';
import { ReportsEntity } from '@reporting-system/api-interfaces';
enum ReportsActionsEnum {
  init = '[Reports Page] Init',
  loadReportsSuccess = '[Reports/API] Load Reports Success',
  loadReportsFailure = '[Reports/API] Load Reports Failure',
  blockReport = '[Reports/API] Block Report',
  blockReportSuccess = '[Reports/API] Block Report Success',
  blockReportFailure = '[Reports/API] Block Report Failure',
  resolveReport = '[Reports/API] Resolve Report',
  resolveReportSuccess ='[Reports/API] Resolve Report Success',
  resolveReportFailure ='[Reports/API] Resolve Report Failure',
}

export const init = createAction(ReportsActionsEnum.init);

export const loadReportsSuccess = createAction(
  ReportsActionsEnum.loadReportsSuccess,
  props<{ reports: ReportsEntity[] }>()
);

export const loadReportsFailure = createAction(
  ReportsActionsEnum.loadReportsFailure,
  props<{ error: any }>()
);

export const blockReport = createAction(
  ReportsActionsEnum.blockReport,
  props<{ id: string }>()
);
export const blockReportSuccess = createAction(
  ReportsActionsEnum.blockReportSuccess,
  props<{ id: string }>()
);
export const blockReportFailure = createAction(
  ReportsActionsEnum.blockReportFailure,
  props<{ id: string, error: any }>()
);

export const resolveReport = createAction(
  ReportsActionsEnum.resolveReport,
  props<{ id: string }>()
);
export const resolveReportSuccess = createAction(
  ReportsActionsEnum.resolveReportSuccess,
  props<{ id: string }>()
);
export const resolveReportFailure = createAction(
  ReportsActionsEnum.resolveReportFailure,
  props<{ id: string, error: any }>()
);