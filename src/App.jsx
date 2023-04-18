import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import Login from "./components/Auth/Login";
import Registro from "./components/Auth/Registro";
import AuthTemplate from "./components/Auth/AuthTemplate";
import { ContextProvider } from "./context/GlobalContext";
import Datos from "./components/Escritorio/Datos";
import Layout from "./components/Template/Layout";
import Encuestas from "./components/Encuestas/Encuestas";
import CrearEncuesta from "./components/Encuestas/CrearEncuesta";
import Resultados from "./components/Encuestas/Resultados";
import ResultadoEncuesta from "./components/Encuestas/ResultadoEncuesta";
import Perfil from "./components/Perfil/Perfil";
import Lista from "./components/Usuarios/Lista";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/login");
    }
  }, [location]);

  return (
    <ContextProvider>
      
      <Routes>
        <Route path="/" element={<AuthTemplate />}>
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>

        <Route path="/escritorio" element={<Layout />}>
          <Route path="inicio" element={<Datos />} />
          <Route path="encuestas" element={<Encuestas />} />
          <Route path="encuestas/crear" element={<CrearEncuesta />} />
          <Route path="resultados" element={<Resultados />} />
          <Route path="resultados/:idEncuesta" element={<ResultadoEncuesta />} />
          <Route path="perfil/:idUsuario" element={<Perfil />} />
          <Route path="usuarios" element={<Lista />} />
        </Route>

        <Route
          path="/*"
          element={
            <div className="w-100 vh-100 d-flex flex-column justify-content-center">
              <h1 className="text-center">Error 404</h1>
              <Link className="text-center text-dark" to="/escritorio/inicio">Volver al inicio</Link>
            </div>
          }
        />
      </Routes>
    </ContextProvider>
  );
}

export default App;
