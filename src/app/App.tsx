import { useEffect, useState } from "react";
import MainLayout from "../shared/layouts/MainLayout";
import LayoutFooter from "../widgets/LayoutFooter/LayoutFooter";
import LayoutHeader from "../widgets/LayoutHeader/LayoutHeader";
import withLoading from "../shared/lib/hoc/withLoading";
import PostList from "../widgets/PostList/PostList";
import type { Post } from "../entities/post/model/types";

// Заглушка
const mockPosts = [
  {
    id: 1,
    title: "Post 1",
    content: "Some controversial text regarding benefits of lunch time sleep",
  },
  {
    id: 2,
    title: "Post 2",
    content: "The survey that shows you if you're a doglover or a dogeater",
  },
  {
    id: 3,
    title: "Post 3",
    content: "40 years like a dream, working on shitpump machine",
  },
];

const PostListWithLoading = withLoading(PostList);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  //имитируем загрузку данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <PostListWithLoading posts={posts} isLoading={isLoading} />
    </MainLayout>
  );
}

export default App;
