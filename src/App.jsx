import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/Registration/LogIn";
import LogIn1 from "./pages/Registration/LogIn1";
import SignIn from "./pages/Registration/SignIn";
import Profile from "./pages/Profile/Profile";
import ProtectedRoutes from "./utils/ProtectedeRoutes";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Tariffs from "./pages/Tariffs/Tariffs";
function App() {
  
  return(
    <BrowserRouter>
      <Routes>
      <Route element={<LogIn/>}  path="/log"/>
      <Route element={<SignIn/>}  path="/sign"/>
      <Route element={<LogIn1/>} path="/log1"/>
      <Route element={<Home/>}  path="/"/>
      <Route element={<AboutUs/>} path="/aboutUs"/>
      <Route element={<Tariffs/>} path="/tariffs"/>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<Profile/>}  path="/prof"/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
