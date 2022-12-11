import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateEmailApi } from "../../../api/user";

export default function ChangeEmailForm({ user, logout, setReloadUser }) {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(user.email),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateEmailApi(user.id, formData, logout);
      if (!response) {
        toast.error("Error al actualizar el email");
      } else {
        setReloadUser(true);
        toast.success("Email actualizado");
      }
      setLoading(false);
    },
  });
  return (
    <div className="change-name-form">
      <h4> Cambia tu Email</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            email="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
        </Form.Group>
        <Button className="submit" loading={loading}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}

function initialValues(email) {
  return {
    email: email || "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().required(true),
  };
}
