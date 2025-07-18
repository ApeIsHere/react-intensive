import { useParams } from "react-router-dom";
import PostListWithLoading from "../../widgets/PostList/PostListWithLoading";
import styles from "./UserPostsPage.module.css";
import { useGetPostsQuery } from "../../entities/post/api/postsApi";
import { useGetAllCommentsQuery } from "../../entities/comment/api/commentsApi";

function UserPostsPage() {
  const { id } = useParams(); //user id
  const userId = Number(id);
  const { data: posts = [], isLoading: isPostsLoading } = useGetPostsQuery(userId);
  const { data: comments = [], isLoading: isCommentsLoading } = useGetAllCommentsQuery();
  const isLoading = isPostsLoading || isCommentsLoading;

  const userPosts = posts.filter((post) => post.userId === Number(id));
  const authorName = userPosts[0]?.userName ?? "unknown user";

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
      title={`${authorName} posts`}
    />
  );
}

export default UserPostsPage;
