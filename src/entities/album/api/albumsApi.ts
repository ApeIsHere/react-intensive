import { baseApi } from "../../../shared/api/baseApi";
import type { Album } from "../model/types";

export const albumsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserAlbums: builder.query<Album[], number>({
      query: (userId) => `/users/${userId}/albums`,
      providesTags: (result, error, userId) => [{ type: "Albums", id: userId }],
    }),
    getAlbumById: builder.query<Album, number>({
      query: (albumId) => `/posts/${albumId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserAlbumsQuery, useGetAlbumByIdQuery } = albumsApi;
