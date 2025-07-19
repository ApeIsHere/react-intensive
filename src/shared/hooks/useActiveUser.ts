// src/shared/hooks/useActiveUser.ts
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "../../entities/post/model/slice/postSlice";
import { selectUserById } from "../../entities/user/model/slice/userSlice";
import { useGetAlbumByIdQuery } from "../../entities/album/api/albumsApi";
import type { RootState } from "../../app/providers/store/store";

export const useActiveUser = () => {
  const { id } = useParams();
  const location = useLocation();
  const idNumber = id ? Number(id) : undefined;

  const isUserRoute = location.pathname.startsWith("/users/");
  const isPostRoute = location.pathname.startsWith("/posts/");
  const isAlbumRoute = location.pathname.startsWith("/albums/");
  const shouldSkipQuery = !isAlbumRoute || idNumber === undefined;

  // get post
  const post = useSelector((state: RootState) =>
    isPostRoute && idNumber !== undefined ? selectPostById(state, idNumber) : undefined
  );

  // get album
  const { data: album } = useGetAlbumByIdQuery(idNumber!, {
    skip: shouldSkipQuery,
  });

  // get userId from any :id in URL
  const userId = isUserRoute ? idNumber : post?.userId ?? album?.userId;

  // finally get user
  const user = useSelector((state: RootState) =>
    userId !== undefined ? selectUserById(state, userId) : undefined
  );

  return user;
};
