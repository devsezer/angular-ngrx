import {createAction, props} from '@ngrx/store';
import {Company} from '../models/company.model';


export const loadCompany = createAction(
  '[Company Resolver] Load Company',
  props<{companyId: number}>()
);

export const companyLoaded = createAction(
  '[Load Company Effect]',
  props<{company: Company}>()
);
