import { CaseReducer, createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type State = {
  isLoading: boolean;
  isLoggedIn: boolean;
  userId: string;
  password: string;
  error: Error | null;
};

const initialState: State = {
  isLoading: false,
  isLoggedIn: false,
  userId: '',
  password: '',
  error: null,
};

// 액션과 리듀서를 동시에 생성
// const onLogin: CaseReducer<State, PayloadAction<{ userId: string; password: string }>> = (
//   state,
//   action,
// ) => {
//   const { userId, password } = action.payload;
//   state.isLoading = true;
// };

// const onLoginSuccess: CaseReducer<State, PayloadAction> = (state, action) => {
//   state.isLoading = false;
//   state.isLoggedIn = true;
// };

// const onLoginFailure: CaseReducer<State, PayloadAction<{ error: Error }>> = (state, action) => {
//   const { error } = action.payload;
//   state.isLoading = false;
//   state.isLoggedIn = false;
//   state.password = '';
//   state.error = error;
// };

export const onRequestLogin = createAsyncThunk(
  'user/REQEUST_LOGIN',
  async ({ userId, password }: { userId: string; password: string }) => {
    console.log({ userId, password });
    return { userId, password };
  },
);

export const onRequestLogout = createAsyncThunk('user/REQEUST_LOGOUT', async () => {
  return {};
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [onRequestLogin.pending.type]: (state: State, action) => {
      console.log('로그인 시도');
      console.log({ action });
      const { userId, password } = action.meta.arg;
      state.isLoading = true;
      state.userId = userId;
      state.password = password;
    },
    [onRequestLogin.fulfilled.type]: (state: State, action) => {
      console.log('로그인 성공');
      console.log({ action });
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [onRequestLogin.rejected.type]: (state: State) => {
      console.log('로그인 실패');
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [onRequestLogout.pending.type]: (state: State, action) => {
      console.log('로그아웃 시도');
      state.isLoading = true;
    },
    [onRequestLogout.fulfilled.type]: (state: State) => {
      console.log('로그아웃 성공');
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [onRequestLogout.rejected.type]: (state: State) => {
      console.log('로그아웃 실패');
      state.isLoading = false;
      state.isLoggedIn = false;
    },
  },
});

export const {
  onLogin: onLoginAction,
  onLoginSuccess: onLoginSuccessAction,
  onLoginFailure: onLoginFailureAction,
} = userSlice.actions;

export default userSlice.reducer;
