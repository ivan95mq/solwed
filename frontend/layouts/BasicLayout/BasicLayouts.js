import { Container } from "semantic-ui-react";
import Header from "../../components/Header/Header";
export default function BasicLayouts(props) {
  const { children } = props;
  return (
    <Container fluid className="basic-layout">
      <Header />
      <Container className="content">Menu</Container>
      {children}
    </Container>
  );
}
