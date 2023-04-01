import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./context/GlobalContext";
import Layout from "./components/Template/Layout";
import Datos from "./components/Escritorio/Datos";
import Encuestas from "./components/Encuestas/Encuestas";
import CrearEncuesta from "./components/Encuestas/CrearEncuesta";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<h1>Hola</h1>}></Route>

        <Route path="/escritorio" element={<Layout />}>
          <Route path="inicio" element={<Datos />} />
          <Route path="encuestas" element={<Encuestas />} />
          <Route path="encuestas/crear" element={<CrearEncuesta />} />
          <Route path="perfil/" element={<h1>Perfil</h1>} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
