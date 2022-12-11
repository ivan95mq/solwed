import { Container } from "semantic-ui-react";
import classNames from "classnames";
import Header from "../../components/Header/Header";

export default function BasicLayouts(props) {
  const { children, className } = props;
  return (
    <Container
      fluid
      className={classNames("basic-layout", {
        [className]: className,
      })}
    >
      <Header />
      <Container className="content">{children}</Container>
    </Container>
  );
}
