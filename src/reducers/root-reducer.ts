import { combineReducers, createAction } from '@reduxjs/toolkit';

import { api } from 'services';

export const resetState = createAction('root/resetState');

const combinedReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const rootReducer: typeof combinedReducer = (state, action) => {
  if (resetState.match(action)) state = undefined;

  return combinedReducer(state, action);
};

export type RootState = ReturnType<typeof combinedReducer>;
