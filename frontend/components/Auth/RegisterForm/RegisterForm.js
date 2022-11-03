export default function RegisterForm(props) {
  const { showLoginForm } = props;
  return (
    <div>
      <h1>Formulario de registro</h1>
      <button onClick={showLoginForm}>Ir al login</button>
    </div>
  );
}
