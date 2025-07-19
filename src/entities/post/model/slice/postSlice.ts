import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Post } from "../types";
import type { RootState } from "../../../../app/providers/store/store";

const postAdapter = createEntityAdapter<Post>();
const initialState = postAdapter.getInitialState();

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setAllPosts: postAdapter.setAll,
    addPost: postAdapter.addOne,
    updatePost: postAdapter.updateOne,
    removePost: postAdapter.removeOne,
  },
});

export const { addPost, updatePost, removePost, setAllPosts } = postSlice.actions;

export const {
  selectById: selectPostById,
  selectAll: selectAllPosts,
  selectIds: selectPostIds,
  selectEntities: selectPostEntities,
} = postAdapter.getSelectors((state: RootState) => state.post);

export default postSlice.reducer;
