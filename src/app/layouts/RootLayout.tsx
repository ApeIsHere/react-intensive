import { Outlet } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader";
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter";
import UserTabs from "../../widgets/UserTabs/UserTabs";

function RootLayout() {
  return (
    <MainLayout
      header={<LayoutHeader />}
      content={<Outlet />}
      footer={<LayoutFooter />}
      tabs={<UserTabs />}
    />
  );
}

export default RootLayout;
