import { Route, Routes} from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Registro from "./components/Auth/Registro";
import AuthTemplate from "./components/Auth/AuthTemplate";
import { ContextProvider } from "./context/GlobalContext";

function App() {

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<AuthTemplate />}>
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>

      </Routes>
    </ContextProvider>
  );
}

export default App;

