// src/components/layout/MainLayout.tsx

import { Layout } from "antd";
import type { ReactNode } from "react";

interface mainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: mainLayoutProps) => {

  return (
    <Layout
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
      }}
    >
      {children}
    </Layout>
  );
};
