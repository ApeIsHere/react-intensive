import { Outlet } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader";
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter";
import MainTabs from "../../widgets/MainTabs/MainTabs";

function DefaultLayout() {
  return (
    <MainLayout
      header={<LayoutHeader />}
      sidebar={<MainTabs />}
      content={<Outlet />}
      footer={<LayoutFooter />}
    />
  );
}

export default DefaultLayout;
