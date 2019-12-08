import {Action, createReducer} from '@ngrx/store';

export const companyFeatureKey = 'companyState';

export interface CompanyState {
  companyName: string;
}

export const initialState: CompanyState = {
  companyName: 'no company'
};

const reducer = createReducer(
  initialState
);

export function companyReducer(state: CompanyState | undefined, action: Action) {
  return reducer(state, action);
}
