import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserToken } = authSlice.actions;
export default authSlice.reducer;
