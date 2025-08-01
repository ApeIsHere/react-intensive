import type { ReactNode } from "react";
import { useUserInitializer } from "../../shared/hooks/useUserInitializer";

type AppLayoutProps = {
  layout: ReactNode;
};

function AppLayout({ layout }: AppLayoutProps) {
  useUserInitializer();
  return <>{layout}</>;
}

export default AppLayout;
