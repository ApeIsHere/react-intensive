import { useParams } from "react-router-dom";
import usePosts from "../../features/PostList/model/hooks/usePosts";
import PostListWithLoading from "../../widgets/PostList/PostListWithLoading";
import styles from "./UserPostsPage.module.css";

function UserPostsPage() {
  const { id } = useParams(); //user id
  const { posts, comments, isLoading } = usePosts();

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
