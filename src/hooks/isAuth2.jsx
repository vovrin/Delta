import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../data/firabase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { contSlice } from "../data/data";

export function isAuth2(){
    const [isAuth, setAuth] = useState({
        userProf:undefined,
        userInf:undefined,
        isLoading:false
    });
    
    useEffect(()=>{
        setAuth((state)=>{
            return{
                ...state,
                isLoading:true
            }
        })
        const auth = getAuth();
        const onAuth = onAuthStateChanged(auth, async user=>{
            if(user){
                setAuth((state)=>{
                    return{
                        userInf:false,
                        userProf:true
                    }
                })
                const refToInf = doc(db, "users", user.uid);
                const data = await getDoc(refToInf);
                if (data.exists()){
                    setAuth((state)=>{
                        return{
                            ...state,
                            userInf:true,
                            isLoading:false
                        }
                    })
                    
                }else{
                    setAuth((state)=>{
                        return{
                            ...state,
                            userInf:false,
                            isLoading:false
                        }
                    })
                }
            }else{
                setAuth((state)=>{
                    return{
                        userProf:false,
                        userInf:false,
                        isLoading:false
                    }
                })
            }

        })
        return ()=>onAuth()
    },[])
    return isAuth;
}
