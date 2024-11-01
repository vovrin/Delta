import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../data/firabase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { contSlice } from "../data/data";
import { useNavigate } from "react-router-dom";
export function useSetAuthState(){

    const [isLoading, setLoading] = useState(false)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{
        setLoading(true)
        const auth = getAuth();
        const setA = onAuthStateChanged(auth, async user=>{
            if(user){
                const refToInf = doc(db, "users", user.uid);
                const data = await getDoc(refToInf);
                const inf = data.data();
                dispatch(contSlice.setUser({
                    email:user.email,
                    uid:user.uid
                }))
                if (data.exists()){
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
                    //navigate("/log");
                    console.log("no prof inf");
                }
            }else{

            }
        })
        setLoading(false)
        return ()=>setA()
    },[])
    return {
        isLoading
    };
}