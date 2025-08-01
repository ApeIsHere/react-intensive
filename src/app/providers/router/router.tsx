import { createBrowserRouter } from "react-router-dom";
import PostsPage from "../../../pages/PostsPage/PostsPage";
import PostDetailPage from "../../../pages/PostDetailPage/PostDetailPage";
import UserPostsPage from "../../../pages/UserPostsPage/UserPostsPage";
import UserTodosPage from "../../../pages/UserTodosPage/UserTodosPage";
import UserAlbumsPage from "../../../pages/UserAlbumsPage/UserAlbumsPage";
import AlbumPhotosPage from "../../../pages/AlbumPhotosPage/AlbumPhotosPage";
import UserLayout from "../../layouts/UserLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import AppLayout from "../../layouts/AppLayout";
import NotFoundPage from "../../../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout layout={<DefaultLayout />} />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "posts/:id", element: <PostDetailPage /> },
      { path: "albums/:id/photos", element: <AlbumPhotosPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/users/:id",
    element: <AppLayout layout={<UserLayout />} />,
    children: [
      { path: "posts", element: <UserPostsPage /> },
      { path: "todos", element: <UserTodosPage /> },
      { path: "albums", element: <UserAlbumsPage /> },
    ],
  },
]);
