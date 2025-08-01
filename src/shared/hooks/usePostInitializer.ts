import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useGetAllPostsQuery } from "../../entities/post/api/postsApi";
import { setAllPosts, selectAllPosts } from "../../entities/post/model/slice/postSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/providers/store/store";

// Skip fetching posts if posts are in redux store already
export const usePostsInitializer = () => {
  const dispatch = useAppDispatch();

  const allPosts = useSelector((state: RootState) => selectAllPosts(state));
  const shouldSkipQuery = allPosts.length > 0;

  const { data: postsFromQuery = [], isSuccess } = useGetAllPostsQuery(undefined, {
    skip: shouldSkipQuery,
  });

  useEffect(() => {
    if (isSuccess && postsFromQuery.length > 0) {
      dispatch(setAllPosts(postsFromQuery));
    }
  }, [isSuccess, postsFromQuery, dispatch]);
};
