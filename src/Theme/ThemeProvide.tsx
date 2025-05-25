import type { ThemeConfig } from "antd";
import { type ReactNode } from "react";
import { theme as antdTheme, ConfigProvider } from "antd";
import { MainLayout } from "../Layout/MainLayout";
import { StyleProvider } from "@ant-design/cssinjs";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeConfig: ThemeConfig = {
    algorithm: [antdTheme.darkAlgorithm],
  };

  return (
    <StyleProvider layer>
      <ConfigProvider theme={themeConfig}>
        <MainLayout>{children}</MainLayout>
      </ConfigProvider>
    </StyleProvider>
  );
};
