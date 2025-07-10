import { useEffect, useState } from "react";
import MainLayout from "../shared/layouts/MainLayout";
import LayoutFooter from "../widgets/LayoutFooter/LayoutFooter";
import LayoutHeader from "../widgets/LayoutHeader/LayoutHeader";
import withLoading from "../shared/lib/hoc/withLoading";
import PostList from "../widgets/PostList/PostList";
import type { Post } from "../entities/post/model/types";
import type { Comment } from "../entities/comment/model/types";
import PostListSkeleton from "../shared/ui/Skeletons/PostListSkeleton";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/router";

// Заглушка
const mockPosts = [
  {
    id: 1,
    title: "To nap or not to nap",
    content: "Some controversial text regarding benefits of lunch time sleep",
  },
  {
    id: 2,
    title: "Take the ultimate Quiz",
    content: "The survey that shows you if you're a doglover or a dogeater",
  },
  {
    id: 3,
    title: "Living in a dream",
    content: "40 years like a dream, working on shitpump machine",
  },
];

const mockComments = [
  {
    id: 1,
    postId: 1,
    userName: "SleeplessDad_42",
    body: "Used to sleep like a kid, but mine seems to hate it, I wonder why",
  },
  {
    id: 2,
    postId: 1,
    userName: "Napfluencer",
    body: "My favourite part of a working day",
  },
  {
    id: 3,
    postId: 2,
    userName: "BarkBQ",
    body: "Finally, a quiz that separates the -aww- crowd from the -mmm- crowd",
  },
  {
    id: 4,
    postId: 2,
    userName: "SpiceRetriever",
    body: "I thought I was a dog person until this test asked for my favorite seasoning",
  },
  {
    id: 5,
    postId: 3,
    userName: "FlushAndFame",
    body: "Living the dream, one flush at a time",
  },
  {
    id: 6,
    postId: 3,
    userName: "Pumpinator9000",
    body: "You came, you pumped, you conquered",
  },
];

// Оборачиваем PostList в HOC и добавляем скелетона на время загрузки
const PostListWithLoading = withLoading(PostList, PostListSkeleton);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  //имитируем загрузку данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setComments(mockComments);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
    // {/* <PostListWithLoading posts={posts} isLoading={isLoading} comments={comments} /> */}
    // </MainLayout>
    <RouterProvider router={router} />
  );
}

export default App;
