import { baseApi } from "../../../shared/api/baseApi";
import type { User } from "../model/types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Users" as const, id })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    getUserById: builder.query<User, number>({
      query: (userId) => `/users/${userId}`,
      providesTags: (result, error, userId) => [{ type: "Users", id: userId }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi;
