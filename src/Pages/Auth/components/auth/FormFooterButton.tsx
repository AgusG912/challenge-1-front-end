import { Button, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../../Models/routes.model";
const { Text } = Typography;

interface FooterButtonProps {
  label: string;
  linkLabel: string;
  url: string;
}

export const FormFooterButton = ({ label, linkLabel, url }: FooterButtonProps) => {

  const redirect = useNavigate()
  const navigateTo = (target: string) => {
    redirect(`/${PublicRoutes.PUBLIC}/${target}`, {replace:true})
  }

  return (
    <Row wrap className="justify-center items-center [@media(min-width:400px)]:justify-between">
      <Text>{label}</Text>
      <Button type="link"
        onClick={() => navigateTo(url)}
      >
        {linkLabel}
      </Button>
    </Row>
  );
};
