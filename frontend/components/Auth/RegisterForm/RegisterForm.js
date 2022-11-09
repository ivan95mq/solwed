import { Form, Button } from "semantic-ui-react";

export default function RegisterForm(props) {
  const { showLoginForm } = props;
  return (
    <>
      <Form className="login-form">
        <Form.Input name="name" type="name" placeholder="Nombre" />
        <Form.Input name="lastname" type="text" placeholder="Apellido" />
        <Form.Input name="email" type="text" placeholder="Correo Electronico" />
        <Form.Input name="password" type="text" placeholder="Contraseña" />
        <div className="actions">
          <Button type="button" basic>
            Iniciar sesión
          </Button>
          <Button type="submit" className="submit">
            Registrar
          </Button>
        </div>
      </Form>
    </>
  );
}
