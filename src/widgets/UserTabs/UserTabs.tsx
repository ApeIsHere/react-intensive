import { useParams } from "react-router-dom";
import SidebarNav from "../../shared/ui/SidebarNav/SidebarNav";

function UserTabs() {
  const { id } = useParams();

  const links = [
    { to: "/", label: "Home" },
    { to: `/users/${id}/posts`, label: "Posts" },
    { to: `/users/${id}/todos`, label: "Todos" },
    { to: `/users/${id}/albums`, label: "Albums" },
  ];

  return <SidebarNav links={links} />;
}

export default UserTabs;
