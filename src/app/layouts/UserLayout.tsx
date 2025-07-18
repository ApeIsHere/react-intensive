import { Outlet } from "react-router-dom";
import UserTabs from "../../widgets/UserTabs/UserTabs";
import MainLayout from "../../shared/layouts/MainLayout";
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader";
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter";

function UserLayout() {
  return (
    <MainLayout
      header={<LayoutHeader />}
      sidebar={<UserTabs />}
      content={<Outlet />}
      footer={<LayoutFooter />}
    />
  );
}

export default UserLayout;
