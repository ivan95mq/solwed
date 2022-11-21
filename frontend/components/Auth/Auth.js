import React, { useState } from "react";
import LoginForms from "./LoginForm/LoginForms";
import RegisterForm from "./RegisterForm/RegisterForm";

export default function Auth(props) {
  const { onCloseModal, setTitleModal } = props;
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal("Iniciar Sesión");
    setShowLogin(true);
  };
  const showRegisterForm = () => {
    setTitleModal("Crear Nuevo Usuario");
    setShowLogin(false);
  };

  return showLogin ? (
    <LoginForms
      showRegisterForm={showRegisterForm}
      onCloseModal={onCloseModal}
    />
  ) : (
    <RegisterForm showLoginForms={showLoginForm} />
  );
}
