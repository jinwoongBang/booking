import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

type State = {
  todos: TodoType[];
};

const initialState: State = {
  todos: [],
};

const addTodo: CaseReducer<State, PayloadAction<{ id: string; text: string }>> = (
  state,
  action,
) => {
  const { id, text } = action.payload;
  state.todos.push({ id, text, completed: false });
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo,
  },
});

export const { addTodo: addTodoAction } = todosSlice.actions;
export default todosSlice.reducer;
