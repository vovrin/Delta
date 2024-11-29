import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { contSlice } from "../data/data";
export function useCheckEmVer(){
    const dispathc = useDispatch()
    const navigate = useNavigate()
    const [isVer, setVer] = useState(false)
    const auth = getAuth()
    useEffect(()=>{
        const act = onAuthStateChanged(auth, user=>{
            if(user){
                console.log("userExist")
                console.log(user)
                if(user.emailVerified == true){
                    setVer(true)
                    console.log("emailVerififed")
                }else{
                    const interval = setInterval(async ()=>{
                        await user.reload();
                        if(user.emailVerified == false){
                            console.log("false")
                        }else{
                            dispathc(contSlice.setAccountVerify())
                            console.log("very good");
                            navigate("/prof")
                            clearInterval(interval)
                        }
                    }, 5000)
                }
            }else{
                console.log("usr not exist")
            }
        })
        return ()=>act();
    }, [])
    return {
        isVer
    }
}