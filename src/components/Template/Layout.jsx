import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { usuario, nocturno } = useContext(GlobalContext);
  const [sidebartoggle, setSidebartoggle] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // antes de hacer el render se valida si hay un usuario en el estado
    if (!usuario) {
      navigate("../login");
    } else {
      const token = usuario.token;
      // si el token es valido devuelve los datos del usuario, 
      // de lo contrario redirige al login
      axios
        .get("http://localhost:3000/api/usuarios/actual", {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async function (response) {
          return;
        })
        .catch(function (error) {
          console.log(error);
          localStorage.removeItem("usuario");
          navigate("../login");
        });

      if (
        location.pathname === "/escritorio" ||
        location.pathname === "/escritorio/"
      ) {
        navigate("/escritorio/inicio");
      }
      setAuth(true);
    }
  }, []);
  return (
    <>
      <div
        className={`vh-100 w-100 ${nocturno ? "bg-dark-2" : "bg-secondary"}`}
        style={{ position: "fixed", zIndex: -5 }}
      ></div>
      <div>
        {auth ? (
          <>
            <SideBar
              sidebartoggle={sidebartoggle}
              setSidebartoggle={setSidebartoggle}
            />
            <NavBar
              sidebartoggle={sidebartoggle}
              setSidebartoggle={setSidebartoggle}
            />

            <Container>
              <Outlet />
            </Container>
          </>
        ) : (
          <div className="w-100 d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Layout;
