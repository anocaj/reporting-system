import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { ReportsEntity } from '@reporting-system/api-interfaces';

import * as ReportsActions from './reports.actions';

export const REPORTS_FEATURE_KEY = 'reports';

export interface State extends EntityState<ReportsEntity> {
  selectedId?: string | number; // which Reports record has been selected
  loaded: boolean; // has the Reports list been loaded
  error?: string | null; // last known error (if any)
}

export interface ReportsPartialState {
  readonly [REPORTS_FEATURE_KEY]: State;
}

export const reportsAdapter: EntityAdapter<ReportsEntity> =
  createEntityAdapter<ReportsEntity>();

export const initialState: State = reportsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reportsReducer = createReducer(
  initialState,
  on(ReportsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ReportsActions.loadReportsSuccess, (state, { reports }) =>
    reportsAdapter.setAll(reports, { ...state, loaded: true })
  ),
  on(ReportsActions.loadReportsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ReportsActions.blockReportSuccess, (state, { id }) =>
    reportsAdapter.updateOne({ id, changes: { state: 'BLOCKED' } }, state)
  ),
  on(ReportsActions.blockReportFailure, (state, { id, error }) =>
    reportsAdapter.updateOne({ id, changes: { state: 'OPEN' } }, state)
  ),
  on(ReportsActions.resolveReportSuccess, (state, { id }) =>
    reportsAdapter.updateOne({ id, changes: { state: 'RESOLVED' } }, state)
  ),
  on(ReportsActions.resolveReportFailure, (state, { id, error }) =>
    reportsAdapter.updateOne({ id, changes: { state: 'OPEN' } }, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return reportsReducer(state, action);
}
