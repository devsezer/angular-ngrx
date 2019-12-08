import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CompanyActions} from '../actions';
import {concatMap, map} from 'rxjs/operators';
import {CompanyService} from '../services/company.service';
import {Company} from '../models/company.model';

@Injectable()
export class CompanyEffects {

  loadCompany$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(CompanyActions.loadCompany),
        concatMap(action => this.service.getCompany(action.companyId)),
        map((company: Company) => CompanyActions.companyLoaded({company}))
      )
  );
  constructor(private actions$: Actions, private service: CompanyService) {
  }
}
