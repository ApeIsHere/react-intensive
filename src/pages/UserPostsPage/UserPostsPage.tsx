import { useParams } from "react-router-dom";
import PostListWithLoading from "../../widgets/PostList/PostListWithLoading";
import styles from "./UserPostsPage.module.css";
import { useGetAllCommentsQuery } from "../../entities/comment/api/commentsApi";
import { useGetUserByIdQuery } from "../../entities/user/api/usersApi";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../entities/post/model/slice/postSlice";
import type { RootState } from "../../app/providers/store/store";
import { useMemo } from "react";
import { usePostsInitializer } from "../../shared/hooks/usePostInitializer";

function UserPostsPage() {
  // load posts to store if the store is empty
  usePostsInitializer();

  const { id } = useParams(); //user id
  const userId = Number(id);
  const allPosts = useSelector((state: RootState) => selectAllPosts(state));

  // Filter and Memoize userPosts
  const userPosts = useMemo(
    () => allPosts.filter((post) => post.userId === userId),
    [allPosts, userId]
  );

  const { data: comments = [], isLoading: isCommentsLoading } = useGetAllCommentsQuery();
  const { data: user, isLoading: isUserLoading } = useGetUserByIdQuery(userId);
  const isLoading = isCommentsLoading || isUserLoading;
  const username = user?.username || "unknown user";

  //guard clauses
  if (!id) return <div>User ID not found</div>;

  if (!isLoading && userPosts.length === 0) {
    return <div className={styles.error}>Posts not found</div>;
  }

  return (
    <PostListWithLoading
      posts={userPosts}
      comments={comments}
      isLoading={isLoading}
      title={`${username} posts`}
    />
  );
}

export default UserPostsPage;
