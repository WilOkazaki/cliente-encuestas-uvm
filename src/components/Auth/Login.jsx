import { useContext, useEffect, useState } from "react";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

function Login() {
  const { usuario, iniciarSesion } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario) {
      navigate("../escritorio/inicio");
    }
  }, []);

  const [loginData, setLoginData] = useState({
    correo: "",
    password: "",
  });

  const [cargando, setCargando] = useState(false);

  const [err, setErr] = useState("");

  const [muestraPassword, setMuestraPassword] = useState(false);

  const handleChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);
    axios
      .post("http://localhost:3000/api/auth/login", loginData, {
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      .then(function (response) {
        iniciarSesion(response.data.token, "../escritorio/inicio");
        setErr("");
        setCargando(false);
      })
      .catch(function (error) {
        if (error.response.data.msg) {
          setCargando(false);
          setErr(error.response.data.msg);
          return;
        }

        console.log(error);
      });
  };

  return (
    <div>
      <h4 className="text-center my-3">
        <strong>Iniciar Sesión</strong>
      </h4>

      <div className="row">
        <div className="mx-auto mb-3" style={{ width: "300px" }}>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel label="Correo electrónico" className="mb-3">
              <Form.Control
                type="email"
                name="correo"
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Contraseña" className="mb-3">
              <Form.Control
                type={muestraPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                placeholder="Contraseña"
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

            {cargando ? (
              <div className="w-100 d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <Button variant="primary" type="submit" className="w-100">
                Ingresar
              </Button>
            )}
          </Form>
        </div>
      </div>
      {err === "" ? (
        ""
      ) : (
        <Alert variant="danger">
          <p>
            <strong>ERROR: </strong>
            {err}
          </p>
        </Alert>
      )}
      <p>
        Sí no tiene cuenta registrese dando{" "}
        <Link to="/registro">click aquí</Link>
      </p>
    </div>
  );
}

export default Login;
