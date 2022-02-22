import { Action } from '@ngrx/store';

import { createReportsEntity } from '../utils/test-utils';

import * as ReportsActions from './reports.actions';
import { State, initialState, reducer } from './reports.reducer';

describe.only('Reports Reducer', () => {

  describe('loadReportsSuccess action', () => {
    it('loadReportsSuccess should return the list of known Reports', () => {
      const reports = [
        createReportsEntity('Report-AAA'),
        createReportsEntity('Report-zzz'),
      ];
      const action = ReportsActions.loadReportsSuccess({ reports });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action:Action = {type: 'Unknown'};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
