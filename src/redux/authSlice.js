import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: null,
  allUsers: [],
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.user = action.payload;
    },

    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },

    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      state.allUsers = state?.allUsers?.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user
      );
    },
    deleteUser: (state, action) => {
      state.allUsers = state.allUsers?.filter(
        (user) => user.id !== action.payload
      );
    },

  },
});

export const { setUserToken, setAllUsers, updateUser, deleteUser } =
  authSlice.actions;
export default authSlice.reducer;
