import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { User } from "../types";
import type { RootState } from "../../../../app/providers/store/store";

const userAdapter = createEntityAdapter<User>();
const initialState = userAdapter.getInitialState();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAllUsers: userAdapter.setAll,
    addUser: userAdapter.addOne,
    updateUser: userAdapter.updateOne,
    removeUser: userAdapter.removeOne,
  },
});

export const { setAllUsers, addUser, updateUser, removeUser } = userSlice.actions;

export const {
  selectById: selectUserById,
  selectAll: selectAllUsers,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
} = userAdapter.getSelectors((state: RootState) => state.user);

export default userSlice.reducer;
