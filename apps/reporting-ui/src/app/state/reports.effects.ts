import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, optimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs';
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
}
