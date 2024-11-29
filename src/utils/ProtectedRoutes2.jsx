import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSetAuthState } from "../hooks/useSetAuthState";
export default function ProtectedRoutes2(){
    const {isLoading} = useSetAuthState();
    const user = useSelector(state=>state.user)
    if(isLoading == true){
        console.log("loading");
    }else if(isLoading == false && user.isVerified != false){
        return <Navigate to="/prof"/>
    }else{
        return <Outlet/>
    }
}