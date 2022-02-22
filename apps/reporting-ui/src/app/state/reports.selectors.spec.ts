import { ReportsEntity } from '@reporting-system/api-interfaces';
import { createReportsEntity } from '../utils/test-utils';
import {
  reportsAdapter,
  ReportsPartialState,
  initialState,
} from './reports.reducer';
import * as ReportsSelectors from './reports.selectors';

describe('Reports Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getReportsId = (it: ReportsEntity) => it.id;
  
  let state: ReportsPartialState;

  beforeEach(() => {
    state = {
      reports: reportsAdapter.setAll(
        [
          createReportsEntity('Report-AAA'),
          createReportsEntity('Report-BBB'),
          createReportsEntity('Report-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'Report-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Reports Selectors', () => {
    it('getAllReports() should return the list of Reports', () => {
      const results = ReportsSelectors.getAllReports(state);
      const selId = getReportsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('Report-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ReportsSelectors.getSelected(state) as ReportsEntity;
      const selId = getReportsId(result);

      expect(selId).toBe('Report-BBB');
    });

    it('getReportsLoaded() should return the current "loaded" status', () => {
      const result = ReportsSelectors.getReportsLoaded(state);

      expect(result).toBe(true);
    });

    it('getReportsError() should return the current "error" state', () => {
      const result = ReportsSelectors.getReportsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
