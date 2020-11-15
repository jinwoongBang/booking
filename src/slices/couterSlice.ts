import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  number: number;
};

const initialState: State = {
  number: 0,
};

const onIncrement: CaseReducer<State, PayloadAction<{ size: number }>> = (state, action) => {
  const { size } = action.payload;
  state.number += size;
};

const onDecrement: CaseReducer<State, PayloadAction<{ size: number }>> = (state, action) => {
  const { size } = action.payload;
  state.number -= size;
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    onIncrement,
    onDecrement,
  },
});

export const {
  onIncrement: onIncrementAction,
  onDecrement: onDecrementAction,
} = counterSlice.actions;

export default counterSlice.reducer;
