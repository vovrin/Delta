import { useMarkerRef } from "@vis.gl/react-google-maps";
import { useRef } from "react";
import { auth, db } from "../data/firabase";
import { doc, getDoc } from "firebase/firestore";
import {signInWithEmailAndPassword } from "firebase/auth";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contSlice } from "../data/data";
import { useNavigate } from "react-router-dom";
export default function SignInForm(){
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const password = useRef();
    const email = useRef();
    const singIn = async (em, pas)=>{
        
        signInWithEmailAndPassword(auth, em, pas).then(async (em)=>{
            
            const refToInf = doc(db, "users", em.user.uid);
            const date = await getDoc(refToInf);
            const inf = date.data()
            if (date.exists()){
                dispatch(contSlice.setUser({
                    uid:em.user.uid,
                    email:em.user.email
                }))
                console.log(inf)
                dispatch(contSlice.setUserGlobInf({
                    name:inf.name,
                    surName:inf.surName,
                    middleName:inf.middleName,
                    phoneNumb:inf.phoneNumb,
                    dateOfBirth:inf.dateOfBirth
                }))
                navigate("/prof")
            }else{
                navigate("/log1")
            }
            
        })
            
    }
    const formData = (event)=>{
        event.preventDefault();
        singIn(email.current.value, password.current.value);
        
    }
    return(
        <form onSubmit={formData} className="signInForm">
            <label className="lblForGoogle">
                <GoogleAuth/>
            </label>
            <label htmlFor=""  className="lblForInp">Електронна адреса</label>
            <input type="email" ref={email} className="emailAddress" name="useEmail" required/>
            <label htmlFor="" className="lblForInp">Пароль</label>
            <input type="password" ref={password}  className="passwordOfUser"/>
            <label htmlFor="" className="lablOfCheckBox">Я погоджуюс з політикою конфіденсійності компанії Delta <input type="checkbox" className="agreeCheckBox" name="agree"/></label>
            
            <div className="signInLogInCont"><p>Ще не зареєструвались? <Link to="/log1" className="changeFormToLogIn">Зареєструватися</Link></p><button className="nextStepRegBut">Увійти</button></div>
        </form>
    )
}