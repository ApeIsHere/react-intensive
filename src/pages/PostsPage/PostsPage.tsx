import { useGetAllCommentsQuery } from "../../entities/comment/api/commentsApi";
import { useGetAllPostsQuery } from "../../entities/post/api/postsApi";
import PostListWithLoading from "../../widgets/PostList/PostListWithLoading";

function PostsPage() {
  const { data: posts = [], isLoading: isPostsLoading } = useGetAllPostsQuery();
  const { data: comments = [], isLoading: isCommentsLoading } = useGetAllCommentsQuery();
  const isLoading = isPostsLoading || isCommentsLoading;

  return <PostListWithLoading posts={posts} isLoading={isLoading} comments={comments} />;
}

export default PostsPage;
