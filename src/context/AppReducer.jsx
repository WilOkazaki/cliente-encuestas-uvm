export default function appReducer(state, action) {
  switch (action.type) {
    case "CREAR_USUARIO":
      localStorage.setItem(
        "state",
        JSON.stringify({
          ...state,
          usuarios: [...state.usuarios, action.payload],
        })
      );
      return {
        ...state,
        usuarios: [...state.usuarios, action.payload],
      };

    case "INICIAR_SESION":
      return {
        ...state,
        usuario: action.payload,
      };

    default:
      break;
  }
}
