import { useParams } from "react-router-dom";
import PostListWithLoading from "../../widgets/PostList/PostListWithLoading";
import styles from "./UserPostsPage.module.css";
import { useGetUserPostsQuery } from "../../entities/post/api/postsApi";
import { useGetAllCommentsQuery } from "../../entities/comment/api/commentsApi";
import { useGetUserByIdQuery } from "../../entities/user/api/usersApi";

function UserPostsPage() {
  const { id } = useParams(); //user id
  const userId = Number(id);
  const { data: userPosts = [], isLoading: isPostsLoading } =
    useGetUserPostsQuery(userId);
  const { data: comments = [], isLoading: isCommentsLoading } = useGetAllCommentsQuery();
  const { data: user, isLoading: isUserLoading } = useGetUserByIdQuery(userId);
  const isLoading = isPostsLoading || isCommentsLoading || isUserLoading;
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
