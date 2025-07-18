import { baseApi } from "../../../shared/api/baseApi";
import type { Post } from "../model/types";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllPostsQuery, useGetPostQuery } = postsApi;
