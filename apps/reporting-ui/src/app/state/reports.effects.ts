import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, optimisticUpdate } from '@nrwl/angular';
import { map, mapTo } from 'rxjs';
import { ReportsService } from '../reports/reports.service';

import * as ReportsActions from './reports.actions';
import * as ReportsFeature from './reports.reducer';

@Injectable()
export class ReportsEffects {
  
  constructor(
    private readonly actions$: Actions,private reportsService: ReportsService
  ) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportsActions.init),
      fetch({
        run: (action) => {
          return this.reportsService.getReports$().pipe(
            map((reports) => ReportsActions.loadReportsSuccess({ reports }))
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ReportsActions.loadReportsFailure({ error });
        },
      }),
    )
  );

  blockReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportsActions.blockReport),
      optimisticUpdate({
        run: (action) => {
          return this.reportsService.blockReport(action.id).pipe(
            mapTo({
              id: action.id,
              type: ReportsActions.blockReportSuccess.type,
            })
          );
        },
        undoAction: (action, error: any) => {
          return {
            id: action.id,
            error: error,
            type: ReportsActions.blockReportFailure.type,
          };
        },
      })
    )
  );

  resolveReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportsActions.resolveReport),
      optimisticUpdate({
        run: (action) => {
          return this.reportsService.resolveReport(action.id).pipe(
            mapTo({
              id: action.id,
              type: ReportsActions.resolveReportSuccess.type,
            })
          );
        },
        undoAction: (action, error: any) => {
          return {
            id: action.id,
            error: error,
            type: ReportsActions.resolveReportFailure.type,
          };
        },
      })
    )
  );
}
