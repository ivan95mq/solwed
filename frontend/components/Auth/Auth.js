import React, { useState } from "react";
import LoginForms from "./LoginForm/LoginForms";
import RegisterForm from "./RegisterForm/RegisterForm";

export default function Auth(props) {
  const { onCloseModal, setTitleModal } = props;
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setShowLogin(true);
    setTitleModal("Iniciar Sesión");
  };
  const showRegisterForm = () => {
    setShowLogin(false);
    //setTitleModal("Crear Nuevo Usuario");
  };

  return showLogin ? (
    <LoginForms showRegisterForm={showRegisterForm} />
  ) : (
    <RegisterForm showLoginForms={showLoginForm} />
  );
}
