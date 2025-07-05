import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";

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

function PostList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Posts</h1>
      {mockPosts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default PostList;
