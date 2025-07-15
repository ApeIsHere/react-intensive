import usePosts from "../../features/PostList/model/hooks/usePosts";
import PostListWithLoading from "../../widgets/PostList/PostListWithLoading";

function PostsPage() {
  const { posts, comments, isLoading } = usePosts();
  return <PostListWithLoading posts={posts} isLoading={isLoading} comments={comments} />;
}

export default PostsPage;
