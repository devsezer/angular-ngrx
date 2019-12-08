import {Action, createReducer, on} from '@ngrx/store';
import {Company} from '../models/company.model';
import {CompanyActions} from '../actions';

export const companyFeatureKey = 'companyState';

export interface CompanyState {
  currentCompany: Company | null;
}

export const initialState: CompanyState = {
  currentCompany: null
};

const reducer = createReducer(
  initialState,
  on(CompanyActions.companyLoaded, (state, action) => {
    return {
      ...state,
      currentCompany: action.company
    };
  } )
);

export function companyReducer(state: CompanyState | undefined, action: Action) {
  return reducer(state, action);
}
