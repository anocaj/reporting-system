import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { Observable } from 'rxjs';

import { ReportsEffects } from './reports.effects';
import { initialState } from './reports.reducer';


describe('ReportsEffects', () => {
  let actions: Observable<Action>;
  let effects: ReportsEffects;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ReportsEffects,
        provideMockActions(() => actions),
        provideMockStore({ initialState }),
      ],
    });
    effects = TestBed.inject(ReportsEffects);
  });


  describe('init$', () => {
    test.todo('should handle init action and return a loadReportsSuccess',);
});

});