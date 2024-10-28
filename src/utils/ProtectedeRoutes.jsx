import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../hooks/isAuth";
import { useEffect } from "react";
export default function ProtectedRoutes(){
    isAuth()
    let inf;
    const user = useSelector(state=>state.user)
    if(user.surName != null){
        inf = <Outlet/>
    }else{
        inf = <Navigate to="/sign"/>
    }
    console.log("what" + user.uid)
    return inf
}
