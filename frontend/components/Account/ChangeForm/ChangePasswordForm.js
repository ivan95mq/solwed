import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateNameApi, updatePasswordApi } from "../../../api/user";

export default function ChangeNameForm({ user, logout, setReloadUser }) {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(user.password),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updatePasswordApi(user.id, formData, logout);
      if (!response) {
        toast.error("Error al actualizar la contraseña");
      } else {
        setReloadUser(true);
        toast.success("Contraseña actualizados");
      }
      setLoading(false);
    },
  });
  return (
    <div className="change-name-form">
      <h4> Cambiar tu contraseña</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="password"
            placeholder="Tu nueva contraseña"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />
          <Form.Input
            name="repeatPassword"
            placeholder="Repitela para confirmar"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}
          />
        </Form.Group>
        <Button className="submit">Actualizar</Button>
      </Form>
    </div>
  );
}

function initialValues(password) {
  return {
    password: "",
    repeatPassword: "",
  };
}

function validationSchema(params) {
  return {
    password: Yup.string()
      .required(true)
      .oneOf([Yup.ref("repeatPassword")], true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], true),
  };
}
