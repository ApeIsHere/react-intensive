import { useEffect, useState } from "react";
import type { Post } from "../../../../entities/post/model/types";
import type { Comment } from "../../../../entities/comment/model/types";
import { mockComments, mockPosts } from "../../../../shared/constants/constants";

function usePosts() {
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

  return { posts, comments, isLoading };
}

export default usePosts;
