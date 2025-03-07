import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { destroyLocalStorage, setLocalUser } from '../../../utils/helper';
import { GHOST } from '../../../constants';

export interface authState {
  user: null | any;
  accessToken: string | null;
  isGhostMode: boolean
}

const initialState: authState = {
  user: null,
  accessToken: null,
  isGhostMode: true
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>) => {
      const user = action.payload;
      const accessToken = user.token;
      state.user = user;
      state.accessToken = accessToken;
      // ghost
      if (accessToken === GHOST.token) {
        state.isGhostMode = true
      } else {
        state.isGhostMode = false
      }
      setLocalUser(user);
    },
    updateUser: (state, action: PayloadAction<any>) => {
      const user = action.payload;
      state.user = user;
      setLocalUser(user);
    },
    logOut: (state, action: PayloadAction<any>) => {
      state.user = null;
      state.accessToken = null;
      destroyLocalStorage();
    },
  },
});

export const { setAuth, updateUser, logOut } = authSlice.actions;

// ===> SELECTORS
export const tokenSelector = (s: any) => s.auth.accessToken;
export const authSelector = (s: any) => s.auth.user;
export const ghostSelector = (s: any) => Boolean(s.auth.isGhostMode);

export default authSlice.reducer;
