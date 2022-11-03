import { useState } from "react";
import Link from "next/link";
import { Container, Menu, Grid, Icon, Modal } from "semantic-ui-react";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth/Auth";

export default function MenuWeb() {
  const [showModal, setShowModal] = useState(false);

  const [titleModal, settitleModal] = useState("Iniciar Sesion");

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions onShowModal={onShowModal} />
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title={titleModal}
        size="small"
      >
        <Auth onCloseModal={onCloseModal} />
      </BasicModal>
    </div>
  );
}

function MenuPlatforms() {
  return (
    <Menu>
      <Link href="/play-station">
        <Menu.Item name="P">{"PlayStation"}</Menu.Item>
      </Link>

      <Link href="/xbox">
        <Menu.Item name="X">XboX</Menu.Item>
      </Link>

      <Link href="/switch">
        <Menu.Item name="S">Switch</Menu.Item>
      </Link>
    </Menu>
  );
}
function MenuOptions(props) {
  const { onShowModal } = props;
  return (
    <Menu>
      <Menu.Item onClick={onShowModal}>
        <Icon name="user outline" />
        Mi cuenta
      </Menu.Item>
    </Menu>
  );
}
