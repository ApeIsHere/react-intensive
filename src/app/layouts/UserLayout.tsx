<<<<<<< HEAD:src/app/layouts/UserLayout.tsx
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
=======
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
>>>>>>> 77bd947 (style(layout): apply layout redesign with fixed header, vertical sidebar, updated theme variables and improved component styling):src/app/layouts/RootLayout.tsx
