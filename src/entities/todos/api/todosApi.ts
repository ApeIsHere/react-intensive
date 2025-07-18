import { baseApi } from "../../../shared/api/baseApi";
import type { Todo } from "../model/types";

export const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], number>({
      query: (userId) => `/users/${userId}/todos`,
      providesTags: (result, error, userId) => [{ type: "Todos", id: userId }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTodosQuery } = todosApi;
