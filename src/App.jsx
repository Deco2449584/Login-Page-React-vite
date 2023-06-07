// Importa los componentes SignIn, SignUp y ForgotPassword desde sus respectivas rutas
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import   './App.css';
// Declara el componente funcional llamado App
const App = () => {
  // Devuelve el contenido JSX del componente App
  return (
    <div>
      {/* Renderiza el componente SignIn */}
      <SignIn/>
      {/* Renderiza el componente SignUp */}
      <SignUp />
      {/* Renderiza el componente ForgotPassword */}
      <ForgotPassword />
    </div>
  );
};

// Exporta el componente App como el componente principal del archivo
export default App;
