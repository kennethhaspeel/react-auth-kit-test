import { Route, Routes } from "react-router-dom";
import Layout from "./paginas/basis/Layout";
import Login from "./paginas/auth/Login"
import Loguit from './paginas/auth/Loguit'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
     
         <Route path="identity">
          <Route path="login" element={<Login />}></Route>
          <Route path="loguit" element={<Loguit />}></Route>
        </Route> 
      </Route>
    </Routes>
  );
}

export default App