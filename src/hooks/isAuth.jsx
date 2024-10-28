
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../data/firabase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contSlice } from "../data/data";
import { useNavigate } from "react-router-dom";
export function isAuth(){
    const navigate = useNavigate()
    const auth = getAuth();
    const dispatch = useDispatch()
    useEffect(()=>{
        const onAuth = onAuthStateChanged(auth, async user=>{
            if(user){
                console.log(user);
                const refToInf = doc(db, "users", user.uid);
                const data = await getDoc(refToInf);
                const inf = data.data();
                if (data.exists()){
                    dispatch(contSlice.setUser({
                        email:user.email,
                        uid:user.uid
                    }))
                    dispatch(contSlice.setUserGlobInf({
                        name:inf.name,
                        surName:inf.surName,
                        middleName:inf.middleName,
                        phoneNumb:inf.phoneNumb,
                        dateOfBirth:inf.dateOfBirth
                    }))
                    if(user.photoURL){
                        dispatch(contSlice.setProfPic({
                            profPict:user.photoURL
                        }))
                    }else{
                        console.log("no prof pict")
                    }
                    
                }else{
                    
                }
            }

        })
        return ()=>onAuth()
    },[])
}