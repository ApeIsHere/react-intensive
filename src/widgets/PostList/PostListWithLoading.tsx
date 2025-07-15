import withLoading from "../../shared/lib/hoc/withLoading";
import PostListSkeleton from "../../shared/ui/Skeletons/PostListSkeleton";
import PostList from "./PostList";

// Оборачиваем PostList в HOC и добавляем скелетона на время загрузки
const PostListWithLoading = withLoading(PostList, PostListSkeleton);

export default PostListWithLoading;
