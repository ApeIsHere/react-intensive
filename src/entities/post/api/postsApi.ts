import { baseApi } from "../../../shared/api/baseApi";
import type { Post } from "../model/types";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;
