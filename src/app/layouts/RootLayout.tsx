import { Outlet } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader";
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter";

function RootLayout() {
  return (
    <MainLayout
      header={<LayoutHeader />}
      content={<Outlet />}
      footer={<LayoutFooter />}
    />
  );
}

export default RootLayout;
