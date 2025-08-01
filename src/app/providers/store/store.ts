import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../../shared/api/baseApi";
import postReducer from "../../../entities/post/model/slice/postSlice";
import userReducer from "../../../entities/user/model/slice/userSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
