import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { Hero } from '../heroes/hero';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(
    CRISES
  );

  constructor() {}

  getCrises(): Observable<Hero[]> {
    return this.crises$;
  }

  getCrisis(id: number | string): Observable<Hero> {
    return this.getCrises().pipe(
      map((crises) => crises.find((crisis) => crisis.id === +id))
    );
  }
}
