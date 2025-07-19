import { useParams } from "react-router-dom";
import { useGetPostCommentsQuery } from "../../entities/comment/api/commentsApi";
import styles from "./PostDetailPage.module.css";
import PostCard from "../../entities/post/ui/PostCard";
import CommentCard from "../../entities/comment/ui/CommentCard";
import Button from "../../shared/ui/Button";
import { useSelector } from "react-redux";
import { selectPostById } from "../../entities/post/model/slice/postSlice";
import type { RootState } from "../../app/providers/store/store";
import { usePostsInitializer } from "../../shared/hooks/usePostInitializer";

function PostDetailPage() {
  // load data to store if the store is empty
  usePostsInitializer();

  const { id } = useParams();
  const postId = Number(id);
  const post = useSelector((state: RootState) => selectPostById(state, postId));
  const {
    data: comments = [],
    isLoading,
    isFetching,
    refetch: refetchComments,
  } = useGetPostCommentsQuery(postId);

  const handleClick = () => {
    refetchComments();
  };

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
            <Button className={styles.refetch} onClick={handleClick}>
              Refresh comments
            </Button>
          </div>
        </div>
        {isFetching && <div className={styles.loading}>Refreshing comments...</div>}
      </div>
      {comments?.length ? (
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
      ) : (
        <div>"There are no comments yet"</div>
      )}
    </>
  );
}

export default PostDetailPage;
