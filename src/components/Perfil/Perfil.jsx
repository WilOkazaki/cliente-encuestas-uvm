import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { GlobalContext } from "../../context/GlobalContext";
import Datos from "./Datos";
import FormEditar from "./FormEditar";
import { useParams } from "react-router-dom";
import axios from "axios";
// componente principal de la pantalla de perfil
function Perfil() {
  const { usuario } = useContext(GlobalContext);
  const [dataUsuario, setDataUsuario] = useState({});
  const [activaEditar, setActivaEditar] = useState(false);
  const { idUsuario } = useParams();

  const validaAdmin = idUsuario != usuario._id && usuario.rol == "admin";

  const cargaUsuario = () => {
    axios
      .get(`http://localhost:3000/api/usuarios/usuario/${idUsuario}`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then(function (response) {
        setDataUsuario(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    cargaUsuario();
  }, []);
  return (
    <div>
      <h1 className="mt-3 mb-5 text-center text-primary">Perfil</h1>
      {activaEditar ? (
        <FormEditar
          datosUsuario={dataUsuario}
          setActivaEditar={setActivaEditar}
          cargaUsuario={cargaUsuario}
        />
      ) : (
        <Datos usuario={dataUsuario} validaAdmin={validaAdmin} />
      )}

      <Button
        className="btn btn-primary rounded-circle"
        style={{
          width: "50px",
          height: "50px",
          position: "fixed",
          right: "3%",
          bottom: "3%",
          zIndex: 30,
        }}
        onClick={() => setActivaEditar(!activaEditar)}
      >
        <h4>{activaEditar ? <BsArrowLeft /> : <BiEditAlt />}</h4>
      </Button>
    </div>
  );
}

export default Perfil;
