import React, { useState, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import { getMeApi } from "../api/user";
import { Icon } from "semantic-ui-react";
import FormularioGeneral from "../components/Account/ChangeForm/FormularioGeneral";
import BasicModal from "../components/Modal/BasicModal";

export default function Account() {
  const [user, setUser] = useState(undefined);
  const { auth, logout, setReloadUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth]);

  if (user === undefined) return null;
  if (!auth && !user) {
    router.replace("/");
    return null;
  }

  return (
    <BasicLayout className="account">
      <Configuracion
        user={user}
        logout={logout}
        setReloadUser={setReloadUser}
      />
      <Adresses />
    </BasicLayout>
  );
}

function Configuracion({ user, logout, setReloadUser }) {
  return (
    <div className="account__configuration">
      <div className="title">Configuración</div>
      <div className="data">
        <FormularioGeneral
          user={user}
          logout={logout}
          setReloadUser={setReloadUser}
        />
      </div>
    </div>
  );
}

function Adresses() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);

  const openModal = () => {
    setTitleModal("Nueva direccion");
    setFormModal(<h1>Nueva dirección</h1>);
    setShowModal(true);
  };

  return (
    <div className="account__addresses">
      <div className="title">
        Direcciones
        <Icon name="plus" link onClick={() => openModal} />
      </div>
      <div className="data">
        <p>Lista de direcciones</p>
        <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
          <p>Formulario Add - Update</p>
        </BasicModal>
      </div>
    </div>
  );
}
