import { useParams } from "react-router-dom";
import usePosts from "../../features/PostList/model/hooks/usePosts";
import styles from "./PostDetailPage.module.css";
import PostCard from "../../entities/post/ui/PostCard";
import CommentCard from "../../entities/comment/ui/CommentCard";

function PostDetailPage() {
  const { id } = useParams(); // post id
  const { posts, comments, isLoading } = usePosts();

  const post = posts.find((p) => p.postId === Number(id));
  const postComments = post ? comments.filter((c) => c.postId === post.postId) : [];

  // guard clases
  if (isLoading) {
    return <div className={styles.loading}>Loading post...</div>;
  }

  if (!id) return <div>Post ID not found</div>;

  if (!post) {
    return <div className={styles.error}>Post not found</div>;
  }

  return (
    <>
      <PostCard post={post} />
      <div className={styles.container}>
        <div className={styles.body}>
          <img src="https://picsum.photos/200/360" alt="random" />
          <div>
            <h3>{post.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
              similique itaque dolorem debitis suscipit atque. Nesciunt, deserunt? Quod
              recusandae itaque maiores quisquam nisi quia laudantium laborum, qui, soluta
              sit earum?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim perspiciatis,
              voluptas voluptatem reprehenderit fugit a in quas facere, omnis dicta animi
              libero repudiandae, sequi magnam consequatur perferendis quisquam doloremque
              sunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              repellat repellendus voluptate fuga nobis similique rem eius, quam quibusdam
              reprehenderit natus illum libero officia aut corrupti quaerat. Suscipit,
              voluptatibus at.
            </p>
          </div>
        </div>
      </div>
      {postComments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default PostDetailPage;
