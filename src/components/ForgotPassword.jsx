// Importa el hook useState desde React
import { useState } from "react";

// Importa el archivo de estilos "ForgotPassword.scss"
import "./styles/ForgotPassword.scss";

// Declara el componente funcional llamado ForgotPassword
const ForgotPassword = () => {
  // Declara el estado local para el campo de email utilizando el hook useState
  const [email, setEmail] = useState("");

  // Declara el estado local para el campo de rememberMe utilizando el hook useState
  const [rememberMe, setRememberMe] = useState(false);

  // Declara la función handleForgotPassword para manejar la recuperación de contraseña
  const handleForgotPassword = () => {
    // Aquí puedes implementar la lógica para enviar un correo electrónico de recuperación de contraseña
  };

  // Devuelve el contenido JSX del componente ForgotPassword
  return (
    <div className="ForgotPassword">
      {/* Renderiza un encabezado "Forgot Password" */}
      <h2>Forgot Password</h2>

      {/* Renderiza un campo de entrada de tipo "email" */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      {/* Renderiza una etiqueta de checkbox para recordar al usuario */}
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        Remember me
      </label>

      {/* Renderiza un botón para enviar la solicitud de recuperación de contraseña */}
      <button onClick={handleForgotPassword}>Submit</button>
    </div>
  );
};

// Exporta el componente ForgotPassword como el componente principal del archivo
export default ForgotPassword;
