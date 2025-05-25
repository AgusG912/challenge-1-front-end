import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";

interface loadingProps {
  label?: string;
  fullScreen?: boolean;
}

export const LoadingSpin = ({ label, fullScreen }: loadingProps) => {
  return (
    <Spin fullscreen={fullScreen} tip={label} indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
  );
};
