import { createFeatureSelector, createSelector } from '@ngrx/store';
import { REPORTS_FEATURE_KEY, State, reportsAdapter } from './reports.reducer';

// Lookup the 'Reports' feature state managed by NgRx
export const getReportsState =
  createFeatureSelector<State>(REPORTS_FEATURE_KEY);

const { selectAll, selectEntities } = reportsAdapter.getSelectors();

export const getReportsLoaded = createSelector(
  getReportsState,
  (state: State) => state.loaded
);

export const getReportsError = createSelector(
  getReportsState,
  (state: State) => state.error
);

export const getAllReports = createSelector(getReportsState, (state: State) =>
  selectAll(state)
);

export const getReportsEntities = createSelector(
  getReportsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getReportsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getReportsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
