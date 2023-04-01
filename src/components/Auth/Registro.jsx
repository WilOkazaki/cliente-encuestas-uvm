import { useContext, useState } from "react";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GlobalContext } from "../../context/GlobalContext";
function Registro() {
  const {crearUsuario} = useContext(GlobalContext);
  const [usuario, setUsuario] = useState({
    correo: "",
    cedula: "",
    nombre: "",
    apellido: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    estado: false,
    lista: [],
  });

  const [registroExitoso, setRegistroExitoso] = useState(false)

  const [muestraPassword, setMuestraPassword] = useState(false);

  const handleChange = (e) =>
    setUsuario({ ...usuario, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const reSoloLetras = new RegExp("^([\Na-zA-ZáéíóúÁÉÍÓÚñÑ ]+)$");
		const reCorreo = new RegExp("^[\\w-\.]+@uvm\.edu\.ve$");
		const reCedula = new RegExp("^[0-9]{7,8}$");
		const rePassword = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");
		const listaErrores = [];

    if (!reCorreo.test(usuario.correo)) {
      listaErrores.push("El correo debe ser el de la institución (uvm.edu.ve)");
    }

    if (!reCedula.test(usuario.cedula)) {
      listaErrores.push("La cédula es incorrecta");
    }

    if (!reSoloLetras.test(usuario.nombre)) {
      listaErrores.push("Nombre invalido");
    }

    if (!reSoloLetras.test(usuario.apellido)) {
      listaErrores.push("Apellido invalido");
    }

    // if (!rePassword.test(usuario.password)) {
    //   listaErrores.push(
    //     "Contraseña debe ser minimo 8 caracteres, mayuscula, minuscula y simbolo"
    //   );
    // }

    if (listaErrores.length > 0)
      return setErrors({ estado: true, lista: listaErrores });

    crearUsuario(usuario);
    setRegistroExitoso(true)
    setUsuario({
      correo: "",
      cedula: "",
      nombre: "",
      apellido: "",
      password: "",
    })
  };

  return (
    <div>
      <h4 className="text-center my-3">
        <strong>Registro</strong>
      </h4>

      <div className="row">
        <div className="mx-auto mb-3" style={{ width: "300px" }}>
          {
            registroExitoso
            ? (
               <div className="text-center">
                <h2><strong>Registro Exitoso</strong></h2>
                <h4>Por favor <Link to="/login">inicie sesión</Link> para ingresar al sistema</h4>
               </div>
              )
            : (
              <Form onSubmit={handleSubmit}>
                <FloatingLabel label="Correo electrónico" className="mb-3">
                  <Form.Control
                    type="text"
                    name="correo"
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    isInvalid={errors.estado}
                    value={usuario.correo}
                    required
                  />
                </FloatingLabel>
                <FloatingLabel label="Cédula" className="mb-3">
                  <Form.Control
                    type="text"
                    name="cedula"
                    onChange={handleChange}
                    placeholder="Cédula"
                    isInvalid={errors.estado}
                    value={usuario.cedula}
                    required
                  />
                </FloatingLabel>
                <FloatingLabel label="Nombre" className="mb-3">
                  <Form.Control
                    type="text"
                    name="nombre"
                    onChange={handleChange}
                    placeholder="Nombre"
                    isInvalid={errors.estado}
                    value={usuario.nombre}
                    required
                  />
                </FloatingLabel>
                <FloatingLabel label="Apellido" className="mb-3">
                  <Form.Control
                    type="text"
                    name="apellido"
                    onChange={handleChange}
                    placeholder="Apellido"
                    isInvalid={errors.estado}
                    value={usuario.apellido}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Contraseña" className="mb-3">
                  <Form.Control
                    type={muestraPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    placeholder="Contraseña"
                    isInvalid={errors.estado}
                    value={usuario.password}
                    required
                  />
                  {muestraPassword ? (
                    <BsEyeSlash
                      className="mostrar-contraseña bg-light"
                      onClick={() => setMuestraPassword(!muestraPassword)}
                    />
                  ) : (
                    <BsEye
                      className="mostrar-contraseña bg-light"
                      onClick={() => setMuestraPassword(!muestraPassword)}
                    />
                  )}
                </FloatingLabel>

                <Button variant="primary" type="submit" className="w-100">
                  Registrarse
                </Button>
              </Form>
            )
          }
        </div>
      </div>

      {errors.estado ? (
        <Alert
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

      {
        registroExitoso
        ? " "
        : (
          <p>
            Sí ya tiene cuenta ingrese dando <Link to="/login">click aquí</Link>
          </p>
        )
      }
    </div>
  );
}

export default Registro;
