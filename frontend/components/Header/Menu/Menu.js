import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth/Auth";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";

export default function MenuWeb() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Iniciar Sesion");

  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      setUser(await getMeApi(logout));
    })();
  }, [auth]);

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
            {user !== undefined && (
              <MenuOptions
                onShowModal={onShowModal}
                user={user}
                logout={logout}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title={titleModal}
        size="small"
      >
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
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
  const { onShowModal, user, logout } = props;
  return (
    <Menu>
      {user ? (
        <>
          <Link href="/orders">
            <Menu.Item>
              <Icon name="game" />
              Mis pedidos
            </Menu.Item>
          </Link>

          <Menu.Item onClick={logout}>Cerrar sesion</Menu.Item>
        </>
      ) : (
        <Menu.Item onClick={onShowModal}>
          <Icon name="user outline" />
          Mi cuenta
        </Menu.Item>
      )}
    </Menu>
  );
}
