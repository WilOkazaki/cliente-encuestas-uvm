import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

let initialState = {};

const getLocalStorageData = new Promise((resolve, reject) => {
  resolve(JSON.parse(localStorage.getItem("state")));
});

getLocalStorageData.then((valores) => {
  if (valores) initialState = valores;
  else
    initialState = {
      usuarios: [],
    };
});

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispath] = useReducer(appReducer, initialState);

  const crearUsuario = (usuario) => {
    usuario.id = Date.now();
    usuario.role = "usuario";
    dispath({ type: "CREAR_USUARIO", payload: usuario });
  };

  const iniciarSesion = (datos) => {
    const buscaUsuario = state.usuarios.find(
      (item) => item.correo === datos.correo
    );

    if (!buscaUsuario) return "correo no encontrado";

    const comparaPassword =
      buscaUsuario.password === datos.password ? true : false;

    if (!comparaPassword) return "contrseñas no coinciden";
    dispath({ type: "INICIAR_SESION", payload: buscaUsuario });
    return "ok";
  };
  return (
    <GlobalContext.Provider value={{ ...state, crearUsuario, iniciarSesion }}>
      {children}
    </GlobalContext.Provider>
  );
};
