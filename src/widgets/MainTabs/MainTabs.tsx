import { useLocation, useParams } from "react-router-dom";
import SidebarNav from "../../shared/ui/SidebarNav/SidebarNav";

function MainTabs() {
  const { id } = useParams();
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    {
      to: `/posts/${id}`,
      label: "Post",
      visible: location.pathname.startsWith(`/posts/${id}`),
    },
    {
      to: `/albums/${id}/photos`,
      label: "Album",
      visible: location.pathname.startsWith(`/albums/${id}`),
    },
  ];

  return <SidebarNav links={links} />;
}

export default MainTabs;
