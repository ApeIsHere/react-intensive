import { useParams } from "react-router-dom";
import PostListWithLoading from "../../widgets/PostList/PostListWithLoading";
import styles from "./UserPostsPage.module.css";
import { useGetAllCommentsQuery } from "../../entities/comment/api/commentsApi";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../entities/post/model/slice/postSlice";
import type { RootState } from "../../app/providers/store/store";
import { useMemo } from "react";
import { usePostsInitializer } from "../../shared/hooks/usePostInitializer";
import { selectUserById } from "../../entities/user/model/slice/userSlice";

function UserPostsPage() {
  // load data to store if the store is empty
  usePostsInitializer();

  const { id } = useParams(); //user id
  const userId = Number(id);
  const allPosts = useSelector((state: RootState) => selectAllPosts(state));
  const user = useSelector((state: RootState) => selectUserById(state, userId));
  const username = user?.username || "unknown user";
  const { data: comments = [], isLoading } = useGetAllCommentsQuery();

  // Filter and Memoize userPosts
  const userPosts = useMemo(
    () => allPosts.filter((post) => post.userId === userId),
    [allPosts, userId]
  );

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
