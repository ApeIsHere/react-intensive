import type { ReactNode } from "react";

type AppLayoutProps = {
  layout: ReactNode;
};

function AppLayout({ layout }: AppLayoutProps) {
  return <>{layout}</>;
}

export default AppLayout;
