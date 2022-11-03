import React from "react";

export default function LoginForms(props) {
  const { showRegisterForm } = props;
  return (
    <div>
      <h1>Estamos en Formulario de Login </h1>
      <button onClick={showRegisterForm}>Ir al Registro</button>
    </div>
  );
}
