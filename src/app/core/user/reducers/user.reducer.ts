import {Action, createReducer} from '@ngrx/store';

export const userFeatureKey = 'user';

export interface UsersState {
  userName: string;
}

export const initialState: UsersState = {
  userName: 'no user'
};

const reducer = createReducer(
  initialState
);

export function userReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}
