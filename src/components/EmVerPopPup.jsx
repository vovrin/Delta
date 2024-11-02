import { createPortal } from "react-dom";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contSlice } from "../data/data";
import { useCheckEmVer } from "../hooks/useCheckEmVer";
import { useNavigate } from "react-router-dom";

export function EmVerPopPup(){
    
    
    useCheckEmVer();


    {/*const checkEmVer = async ()=>{
        const auth = getAuth();
        
        const a = await onAuthStateChanged(auth, user=>{
            if(user){
                console.log("userExist")
                console.log(user)
                if(user.emailVerified == true){
                    dispatch(contSlice.setAccountVerify());
                    clearInterval(inter)
                    console.log("emailVerififed")
                }else{
                    console.log("EmailDoesntverified")
                }
            }else{
                console.log("usr not exist")
            }
        })
        a()
        
    }
    
    checkEmVer();*/}

    return createPortal(
        <div className="emVerCont">
            <div className="emVer">
                <p>Повідомлення з верифікацією було надіслане</p>
                <button className="reSendEmVerBtn">Надіслати повторно</button>
            </div>
        </div>,
        document.getElementById("popups")
    )
}