import { useContext, useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import axios from "axios";
import FormUsuario from "./FormUsuario";
import { GlobalContext } from "../../context/GlobalContext";
import Swal from "sweetalert2";

// componente para editar los datos de un usuario
function FormEditar({ datosUsuario, setActivaEditar, cargaUsuario }) {
  const { iniciarSesion, usuario } = useContext(GlobalContext);

  const [usuarioData, setUsuarioData] = useState({
    correo: datosUsuario.correo,
    cedula: datosUsuario.cedula,
    nombre: datosUsuario.nombre,
    apellido: datosUsuario.apellido,
    password: "",
  });

  const [errors, setErrors] = useState({
    estado: false,
    lista: [],
  });

  const [cargando, setCargando] = useState(false);

  const handleChange = (e) =>
    setUsuarioData({ ...usuarioData, [e.target.name]: e.target.value });

  // funcion para enviar los datos al backend luego de validar los campos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);
    const reSoloLetras = new RegExp("^([Na-zA-ZáéíóúÁÉÍÓÚñÑ ]+)$");
    const reCorreo = new RegExp("^[\\w-.]+@uvm.edu.ve$");
    const reCedula = new RegExp("^[0-9]{7,8}$");
    
    const listaErrores = [];

    if (!reCorreo.test(usuarioData.correo)) {
      listaErrores.push("El correo debe ser el de la institución (uvm.edu.ve)");
    }

    if (!reCedula.test(usuarioData.cedula)) {
      listaErrores.push("La cédula es incorrecta");
    }

    if (!reSoloLetras.test(usuarioData.nombre)) {
      listaErrores.push("Nombre invalido");
    }

    if (!reSoloLetras.test(usuarioData.apellido)) {
      listaErrores.push("Apellido invalido");
    }

    if (listaErrores.length > 0) {
      setCargando(false);
      return setErrors({ estado: true, lista: listaErrores });
    }

    Swal.fire({
      icon: "question",
      title: "Seguro que deseas editar estos datos?",
      showDenyButton: true,
      confirmButtonText: "Si, editar.",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        let valores = {};
        if (usuarioData.password == '') {
          const {password, ...valoresData} = usuarioData;
          valores = valoresData;
          console.log(password, valores);
        }else{
         valores = usuarioData;
        }
        axios
          .put(
            `http://localhost:3000/api/usuarios/${datosUsuario._id}`,
            valores,
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${usuario.token}`,
              },
            }
          )
          .then(function (response) {
            Swal.fire("Listo!", "Datos editados", "success");
            
            if (usuario._id === datosUsuario._id) {
              iniciarSesion(usuario.token, `escritorio/perfil/${datosUsuario._id}`);
              cargaUsuario();
              setCargando(false);
            }else{
              cargaUsuario();
              setCargando(false);
            }
            setErrors({
              estado: false,
              lista: [],
            });
            setActivaEditar(false);
          })
          .catch(function (error) {
            setCargando(false);
            console.log(error);
            error.response.data.errors.forEach((item) => {
              if (item.msg === "cedula existente") {
                listaErrores.push("Cédula existente");
              }
              if (item.msg === "correo existente") {
                listaErrores.push("Correo existente");
              }
            });

            if (listaErrores.length > 0) {
              setCargando(false);
              return setErrors({ estado: true, lista: listaErrores });
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Los datos no seran editados", "", "info");
        setCargando(false);
        setActivaEditar(false);
      }
    });
  };

  return (
    <div className="animate__animated animate__zoomIn">
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <FormUsuario
            cargando={cargando}
            usuario={usuarioData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          {errors.estado ? (
            <Alert
              className="animate__animated animate__bounceIn"
              variant="danger"
              onClose={() => setErrors({ estado: false, lista: [] })}
              dismissible
            >
              <strong>Error:</strong>
              <ul>
                {errors.lista.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </Alert>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
}

export default FormEditar;
