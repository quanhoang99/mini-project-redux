import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga';

let middlewares: any = [];
const sagaMiddleware = createSagaMiddleware();
middlewares = [...middlewares, sagaMiddleware];
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
