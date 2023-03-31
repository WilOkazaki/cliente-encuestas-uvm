import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Registro from "./components/Auth/Registro";
import AuthTemplate from "./components/Auth/AuthTemplate";
import { ContextProvider } from "./context/GlobalContext";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/login");
    }
  }, [location]);

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<AuthTemplate />}>
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>

        <Route
          path="/*"
          element={
            <div className="w-100 vh-100 d-flex flex-column justify-content-center">
              <h1 className="text-center">Error 404</h1>
            </div>
          }
        />
      </Routes>
    </ContextProvider>
  );
}

export default App;
