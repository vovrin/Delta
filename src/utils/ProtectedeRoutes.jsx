import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setAuth } from "../hooks/setAuth";
import { useEffect } from "react";
import { useState } from "react";
import { isAuth2 } from "../hooks/isAuth2";
export default function ProtectedRoutes(){
    setAuth()
    
    const authInf = isAuth2();
    const user = useSelector(state=>state.user)
    if(authInf.isLoading == true){
        console.log("loading")
        
    }else if(authInf.isLoading == false && authInf.userInf == true){
        return <Outlet/>
    }else{
        <Navigate to="/sign"/>
    }
}
