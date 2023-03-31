import { Route, Routes} from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./context/GlobalContext";

function App() {
  

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<h1>Hola</h1>}>
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
