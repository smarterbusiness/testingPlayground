import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerUserSlice from '../webparts/helloWorld/registerUser/registerUserSlice';

export const store = configureStore({
  reducer: {
    absencesReducer: registerUserSlice, 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
