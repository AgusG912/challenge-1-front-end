import React from "react";
import { Result, Button, Layout, Row, Col, Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  RollbackOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Text } = Typography;

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "24px" }}>
        <Row
          justify="center"
          align="middle"
          style={{
            height: "80vh",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Result
              status="404"
              title="404 - Página no encontrada"
              subTitle={
                <Text type="secondary">
                  La página que estás buscando podría haber sido eliminada,
                  haber cambiado de nombre o no estar disponible temporalmente.
                </Text>
              }
              extra={
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<HomeOutlined />}
                    onClick={() => navigate("/")}
                    block
                  >
                    Ir a la página de inicio
                  </Button>

                  <Button
                    size="large"
                    icon={<RollbackOutlined />}
                    onClick={() => navigate(-1)}
                    block
                  >
                    Volver atrás
                  </Button>
                </Space>
              }
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default NotFoundPage;
