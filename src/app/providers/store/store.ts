import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../../shared/api/baseApi";
import postReducer from "../../../entities/post/model/slice/postSlice";
import userReducer from "../../../entities/user/model/slice/userSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
