import usePosts from "../../features/PostList/model/hooks/usePosts";
import withLoading from "../../shared/lib/hoc/withLoading";
import PostListSkeleton from "../../shared/ui/Skeletons/PostListSkeleton";
import PostList from "../../widgets/PostList/PostList";

// Оборачиваем PostList в HOC и добавляем скелетона на время загрузки
const PostListWithLoading = withLoading(PostList, PostListSkeleton);

function PostsPage() {
  const { posts, comments, isLoading } = usePosts();
  return <PostListWithLoading posts={posts} isLoading={isLoading} comments={comments} />;
}

export default PostsPage;
