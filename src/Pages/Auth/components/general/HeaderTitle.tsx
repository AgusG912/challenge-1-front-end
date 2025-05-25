import { Typography } from "antd";

const { Title, Text } = Typography;

interface headerProps {
  label: string;
  msg?: string;
}

export const HeaderTitle = ({ label, msg }:headerProps) => (
  <div className="text-center mb-6">
    <Title level={3}>{ label }</Title>
    {msg && (
      <Text className="text-gray-400" type="secondary">
        {msg}
      </Text>
    )}
  </div>
);
