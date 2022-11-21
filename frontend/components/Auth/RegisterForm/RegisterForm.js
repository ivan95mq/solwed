import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerApi } from "../../../api/user";
import { toast } from "react-toastify";

export default function RegisterForm(props) {
  const { showLoginForm } = props;
  const [loading, setloading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setloading(true);
      const response = await registerApi(formData);
      if (response?.jwt) {
        toast.success("Registro correcto");
        showLoginForm();
      } else {
        toast.error("Error al registrar el usuario, intentelo mas tarde");
      }
      setloading(false);
    },
  });
  return (
    <>
      <Form className="login-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          name="name"
          type="name"
          placeholder="Nombre"
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          name="lastname"
          type="text"
          placeholder="Apellido"
          onChange={formik.handleChange}
          error={formik.errors.lastname}
        />
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo Electronico"
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          name="password"
          type="text"
          placeholder="Contraseña"
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <div className="actions">
          <Button type="button" basic onClick={showLoginForm}>
            Iniciar sesión
          </Button>
          <Button type="submit" className="submit" loading={loading}>
            Registrar
          </Button>
        </div>
      </Form>
    </>
  );
}

function initialValues() {
  return {
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
