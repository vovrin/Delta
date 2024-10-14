import { useSelector } from "react-redux";
export function isAuth(){
    const {uid} = useSelector(state => state.user);
    return{
        isAuth: !!uid
    } 
}