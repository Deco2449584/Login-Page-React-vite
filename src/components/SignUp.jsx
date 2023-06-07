// Importa el hook useState desde React
import { useState } from 'react';

// Importa el archivo de estilos "SignUp.scss"
import './styles/SignUp.scss';

// Declara el componente funcional llamado SignUp
const SignUp = () => {
  // Declara los estados locales para cada campo utilizando el hook useState
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [favoriteFramework, setFavoriteFramework] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Declara la función handleSignUp para manejar el registro de un nuevo usuario
  const handleSignUp = () => {
    // Aquí puedes implementar la lógica para registrar un nuevo usuario
  };

  // Devuelve el contenido JSX del componente SignUp
  return (
    <div className="SignUp">
      {/* Renderiza un encabezado "Sign Up" */}
      <h2>Sign Up</h2>

      {/* Renderiza un campo de entrada de tipo "text" para el nombre completo */}
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />

      {/* Renderiza un campo de entrada de tipo "email" */}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

      {/* Renderiza un campo de entrada de tipo "password" */}
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

      {/* Renderiza un campo de entrada de tipo "password" para confirmar la contraseña */}
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />

      {/* Renderiza un campo de entrada de tipo "text" para el framework favorito */}
      <input type="text" value={favoriteFramework} onChange={(e) => setFavoriteFramework(e.target.value)} placeholder="Favorite Framework" />

      {/* Renderiza una etiqueta de checkbox para aceptar los términos y condiciones */}
      <label>
        <input type="checkbox" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} />
        I agree to the terms and conditions
      </label>

      {/* Renderiza un botón para el registro */}
      <button onClick={handleSignUp}>Register</button>
    </div>
  );
};

// Exporta el componente SignUp como el componente principal del archivo
export default SignUp;
