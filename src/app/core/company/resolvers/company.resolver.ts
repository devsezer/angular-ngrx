import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CompanyService} from '../services/company.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {finalize, first, tap} from 'rxjs/operators';
import {CompanyActions} from '../actions';

@Injectable()
export class CompanyResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<AppState>) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        tap(() => {
          if (!this.loading) {
            this.loading = true;
            this.store.dispatch(CompanyActions.loadCompany({companyId: 7}));
          }
        }),
        first(),
        finalize(() => this.loading = false)
      );
  }

}
