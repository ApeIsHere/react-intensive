import { baseApi } from "../../../shared/api/baseApi";
import type { Photo } from "../model/types";

export const photosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAlbumPhotos: builder.query<Photo[], number>({
      query: (albumId) => `/albums/${albumId}/photos`,
      providesTags: (result, error, albumId) => [{ type: "Photos", id: albumId }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAlbumPhotosQuery } = photosApi;
