import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./Components/Nav";
import Resetpass from "./Components/Resetpass";
import { PasswordChanged } from "./Components/PasswordChanged";
import Bottom from "./Components/Bottom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Resetpass />} />
        <Route path="/success" element={<PasswordChanged />} />
      </Routes>

      <Bottom />
    </>
  );
}

export default App;
