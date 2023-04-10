export default function appReducer(state, action) {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        ...state,
        usuario: action.payload,
      };

    case "CERRAR_SESION":
      return {};

    case "MODO_NOCTURNO":
      return {
        ...state,
        nocturno: !state.nocturno
      };

    default:
      break;
  }
}
