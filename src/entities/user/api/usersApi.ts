import { baseApi } from "../../../shared/api/baseApi";
import type { User } from "../model/types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query<User, number>({
      query: (userId) => `/users/${userId}`,
      providesTags: (result, error, userId) => [{ type: "Users", id: userId }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserByIdQuery } = usersApi;
