import { useSelector } from "react-redux";
import { useGetAllCommentsQuery } from "../../entities/comment/api/commentsApi";
import { selectAllPosts } from "../../entities/post/model/slice/postSlice";

import PostListWithLoading from "../../widgets/PostList/PostListWithLoading";
import { usePostsInitializer } from "../../shared/hooks/usePostInitializer";

function PostsPage() {
  // load data to store if the store is empty
  usePostsInitializer();

  const posts = useSelector(selectAllPosts);
  const { data: comments = [], isLoading } = useGetAllCommentsQuery();

  return <PostListWithLoading posts={posts} isLoading={isLoading} comments={comments} />;
}

export default PostsPage;
