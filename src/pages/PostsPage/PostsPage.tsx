import { useGetPostsQuery } from "../../entities/post/api/postsApi";
import PostListWithLoading from "../../widgets/PostList/PostListWithLoading";

function PostsPage() {
  const { data: posts = [], isLoading } = useGetPostsQuery();

  return <PostListWithLoading posts={posts} isLoading={isLoading} comments={[]} />;
}

export default PostsPage;
