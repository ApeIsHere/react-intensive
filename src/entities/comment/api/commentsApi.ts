import { baseApi } from "../../../shared/api/baseApi";
import type { Comment } from "../model/types";

export const commentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllComments: builder.query<Comment[], void>({
      query: () => "/comments",
      providesTags: (result) =>
        result ? [{ type: "Comments", id: "LIST" }] : [{ type: "Comments", id: "LIST" }],
    }),
    getPostComments: builder.query<Comment[], number>({
      query: (postId) => `/posts/${postId}/comments`,
      providesTags: (result, error, postId) => [{ type: "Comments", id: postId }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCommentsQuery, useGetPostCommentsQuery } = commentsApi;
