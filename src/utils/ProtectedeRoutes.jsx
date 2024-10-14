import { Outlet, Navigate } from "react-router-dom";
import { isAuth } from "../hooks/isAuth";
const ProtectedRoutes = ()=>{
    return isAuth().isAuth? <Outlet/>:<Navigate to="/sign"/>
}
export default ProtectedRoutes;