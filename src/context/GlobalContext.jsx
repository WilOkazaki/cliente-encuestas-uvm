import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let initialState = {};

// Promesa para consultar si esta el modo nocturno en el local storage
new Promise((resolve) => {
  resolve(JSON.parse(localStorage.getItem("nocturno")));
}).then(async (valor) => {
  
  if (valor) {
    initialState = {...initialState, nocturno: valor}
  }
  else{
    initialState= {...initialState, nocturno: false}
    await localStorage.setItem("nocturno", false);
  }
});

// consulta si hay datos del usuario en el local storage
const getLocalStorageData = new Promise((resolve) => {
  resolve(JSON.parse(localStorage.getItem("usuario")));
});

getLocalStorageData.then((valores) => {
  if (valores) {
    initialState = { ...initialState, usuario: valores };
  } else
    initialState = {
      ...initialState,
    };
});

// creacion de} estado global
export const GlobalContext = createContext(initialState);

// creacion del provider donde vas a estar las funciones para manipular el estado global
export const ContextProvider = ({ children }) => {
  const [state, dispath] = useReducer(appReducer, initialState);
  const navigate = useNavigate();

  // funcion consultar los datos del usuario y guardarlos en el local storage
  const iniciarSesion = async (token, ruta) => {
    axios
      .get("http://localhost:3000/api/usuarios/actual", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async function (response) {
        const datos = response.data;
        datos.token = token;
        await localStorage.setItem("usuario", JSON.stringify(datos));
        dispath({ type: "INICIAR_SESION", payload: datos });
        navigate(ruta);
      })
      .catch(function (error) {
        console.log(error);
      });

    return "ok";
  };

  // funcion para cerrar sesion y borrar los datos del storage y del state
  const cerrarSesion = async () => {
    await localStorage.removeItem("usuario");
    dispath({ type: "CERRAR_SESION" });
    navigate("login");
  };

  // funcion para cambiar el estado del modo nocturno
  const modoNocturno = async () => {
    await localStorage.setItem("nocturno", !state.nocturno);
    dispath({ type: "MODO_NOCTURNO" });
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, iniciarSesion, cerrarSesion, modoNocturno }}
    >
      {children}
    </GlobalContext.Provider>
  );
};