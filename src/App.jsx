import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration2 from "./pages/Registration/Registration2";
import Profile from "./pages/Profile/Profile";
import ProtectedRoutes from "./utils/ProtectedeRoutes";
import ProtectedRoutes2 from "./utils/ProtectedRoutes2";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Tariffs from "./pages/Tariffs/Tariffs";
import Registration from "./pages/Registration/Registration";
import ListOfCars from "./pages/ListOfCars/ListOfCars";
function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<ListOfCars/>} path="/cars"/>
        <Route element={<Home/>}  path="/"/>
        <Route element={<AboutUs/>} path="/aboutUs"/>
        <Route element={<ProtectedRoutes2/>}>
          <Route element={<Registration/>} path="/registration"/>
          <Route element={<Registration2/>} path="/registration2"/>
        </Route>
        <Route element={<Tariffs/>} path="/tariffs"/>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<Profile/>}  path="/prof"/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
