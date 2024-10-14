import { useMarkerRef } from "@vis.gl/react-google-maps";
import { useRef } from "react";
import { auth, db } from "../data/firabase";
import { doc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contSlice } from "../data/data";
import { useNavigate } from 'react-router-dom';
export default function LogInForm1(){
    const history = useNavigate();
    
    const dispatch = useDispatch();
    const password = useRef();
    const email = useRef();
    console.log(auth)
    const logIn = async (em, pas)=>{
        
        createUserWithEmailAndPassword(auth, em, pas).then(async(em)=>{
            
            const refToInf = doc(db, "users", em.user.uid);
            const date = await getDoc(refToInf);
            if (date.exists()){
                console.log("exist")
                history("/sign")
            }else{
                dispatch(contSlice.setUser({
                    uid:em.user.uid,
                    email:em.user.email
                }))
                history("/log")
            }
        }).catch((error)=>{
            console.log(error)
        })
            
    }
    const formData = (event)=>{
        event.preventDefault();
        logIn(email.current.value, password.current.value);
    }
    return(
        <form onSubmit={formData} className="logInForm">
            <label className="lblForGoogle">
                <GoogleAuth/>
            </label>
            <label htmlFor=""  className="lblForInp">Електронна адреса</label>
            <input type="email" ref={email} className="emailAddress" name="useEmail" required/>
            <label htmlFor="" className="lblForInp">Пароль</label>
            <input type="password" ref={password}  className="passwordOfUser"/>
            <label htmlFor="" className="lblForInp">Повторіть пароль</label>
            <input type="password" className="confirmPasswordOfUser"/>
            <label htmlFor="" className="lablOfCheckBox">Я погоджуюс з політикою конфіденсійності компанії Delta <input type="checkbox" className="agreeCheckBox" name="agree"/></label>
            
            <div className="signInLogInCont"><p>Маєте аккаунт? <Link to="/sign" className="changeFormToSignIn">Увійти</Link></p><button className="createUserBt">Далі</button></div>
        </form>
    )
}