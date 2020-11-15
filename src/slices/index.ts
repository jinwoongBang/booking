import { combineReducers } from '@reduxjs/toolkit';
import todo from '@src/slices/todoSlice';
import counter from '@src/slices/couterSlice';
import user from '@src/slices/userSlice';

export const rootReducer = combineReducers({ todo, counter, user });

export type RootState = ReturnType<typeof rootReducer>;
