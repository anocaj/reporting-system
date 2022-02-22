import { createAction, props } from '@ngrx/store';
import { ReportsEntity } from '@reporting-system/api-interfaces';

export const init = createAction('[Reports Page] Init');

export const loadReportsSuccess = createAction(
  '[Reports/API] Load Reports Success',
  props<{ reports: ReportsEntity[] }>()
);

export const loadReportsFailure = createAction(
  '[Reports/API] Load Reports Failure',
  props<{ error: any }>()
);
