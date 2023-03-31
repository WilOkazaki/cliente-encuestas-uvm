import { useContext, useState} from "react";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GlobalContext } from "../../context/GlobalContext";

function Login() {
  const {iniciarSesion} = useContext(GlobalContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    correo: "",
    password: ""
  });

  const [err, setErr] = useState('');

  const [muestraPassword, setMuestraPassword] = useState(false);

  const handleChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
      e.preventDefault();
      const validaLogin = iniciarSesion(loginData);

      if(validaLogin !== 'ok') {
        setErr(validaLogin);
        return;
      }

      navigate("/escritorio");

    }

  return (
    <div>
      <h4 className="text-center my-3">
        <strong>Iniciar Sesión</strong>
      </h4>

      {err === "" ? "": (<Alert variant="danger"><p><strong>ERROR: </strong>{err}</p></Alert>) }

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

            <Button variant="primary" type="submit" className="w-100">
              Ingresar
            </Button>
          </Form>
        </div>
      </div>

      <p>
        Sí no tiene cuenta registrese dando{" "}
        <Link to="/registro">click aquí</Link>
      </p>
    </div>
  );
}

export default Login;
