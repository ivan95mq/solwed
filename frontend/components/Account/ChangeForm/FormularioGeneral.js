import React from "react";
import ChangeNameForm from "./ChangeNameForm";
import ChangeEmailForm from "./ChangeEmailForm";
import ChangePasswordForm from "./ChangePasswordForm";

export default function FormularioGeneral({ user, logout, setReloadUser }) {
  return (
    <>
      <ChangeNameForm
        user={user}
        logout={logout}
        setReloadUser={setReloadUser}
      />
      <ChangeEmailForm
        user={user}
        logout={logout}
        setReloadUser={setReloadUser}
      />
      <ChangePasswordForm user={user} logout={logout} />
    </>
  );
}
