import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducers';

/**
 * The Redux store for the application.
 * @type {Object}
 */
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself

/**
 * The root state type of the Redux store.
 * @type {ReturnType<typeof store.getState>}
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The type of the dispatch function in the Redux store.
 * @type {typeof store.dispatch}
 */
export type AppDispatch = typeof store.dispatch;
