// Importa el hook useState desde React
import { useState } from "react";

// Importa el archivo de estilos "SignIn.scss"
import "./styles/SignIn.scss";

// Declara el componente funcional llamado SignIn
const SignIn = () => {
  // Declara los estados locales "email" y "password" utilizando el hook useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Declara la función handleSignIn para manejar el inicio de sesión
  const handleSignIn = () => {
    // Aquí puedes implementar la lógica para iniciar sesión con el email y contraseña
    console.log("Iniciar sesión");
  };

  // Declara la función handleForgotPassword para manejar el olvido de contraseña
  const handleForgotPassword = () => {
    // Aquí puedes implementar la lógica para el caso de olvido de contraseña
    console.log("olvide mi password");
  };

  // Devuelve el contenido JSX del componente SignIn
  return (
    <div className="SignIn">
      {/* Renderiza un encabezado "Sign In" */}
      <h2>Sign In</h2>
      {/* Renderiza un campo de entrada de tipo "email" */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      {/* Renderiza un campo de entrada de tipo "password" */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      {/* Renderiza un botón para el inicio de sesión */}
      <button onClick={handleSignIn}>Login</button>

      {/* Renderiza un botón para el olvido de contraseña */}
      <button onClick={handleForgotPassword}>Forgot Password</button>
    </div>
  );
};

// Exporta el componente SignIn como el componente principal del archivo
export default SignIn;
