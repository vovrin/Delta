import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSetAuthState } from "../hooks/useSetAuthState";
export default function ProtectedRoutes(){
    const {isLoading} = useSetAuthState();
    const user = useSelector(state=>state.user)
    if(isLoading == true){
        console.log("loading");
    }else if(isLoading == false && user.surName != undefined){
        return <Outlet/>
    }else{
        <Navigate to="/sign"/>
    }
}
