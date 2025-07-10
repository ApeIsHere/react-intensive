import { createBrowserRouter } from "react-router-dom";
import PostsPage from "../../../pages/PostsPage/PostsPage";
import RootLayout from "../../layouts/RootLayout";
import PostDetailPage from "../../../pages/PostDetailPage/PostDetailPage";
import UserPostsPage from "../../../pages/UserPostsPage/UserPostsPage";
import UserTodosPage from "../../../pages/UserTodosPage/UserTodosPage";
import UserAlbumsPage from "../../../pages/UserAlbumsPage/UserAlbumsPage";
import AlbumPhotosPage from "../../../pages/AlbumPhotosPage/AlbumPhotosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "posts/:id", element: <PostDetailPage /> },
      { path: "users/:id/posts", element: <UserPostsPage /> },
      { path: "users/:id/todos", element: <UserTodosPage /> },
      { path: "users/:id/albums", element: <UserAlbumsPage /> },
      { path: "albums/:id/photos", element: <AlbumPhotosPage /> },
    ],
  },
]);
