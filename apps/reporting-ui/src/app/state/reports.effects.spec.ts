import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ReportsActions from './reports.actions';
import { ReportsEffects } from './reports.effects';

describe('ReportsEffects', () => {
  let actions: Observable<Action>;
  let effects: ReportsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ReportsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ReportsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ReportsActions.init() });

      const expected = hot('-a-|', {
        a: ReportsActions.loadReportsSuccess({ reports: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
