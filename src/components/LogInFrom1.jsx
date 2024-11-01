import { useMarkerRef } from "@vis.gl/react-google-maps";
import { useRef } from "react";
import {db } from "../data/firabase";
import { doc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contSlice } from "../data/data";
import { useNavigate } from 'react-router-dom';
import { sendEmailVerification } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
export default function LogInForm1(){
    const history = useNavigate();
    
    const dispatch = useDispatch();
    const password = useRef();
    const passwordClone = useRef();
    const email = useRef();
    const auth = getAuth();
    onAuthStateChanged(auth, user=>{
        console.log(user)
    })
    const logIn = async (em, pas)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, em, pas).then(async(state)=>{
            const refToInf = doc(db, "users", state.user.uid);
            const date = await getDoc(refToInf);
            if (date.exists()){
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                    console.log("emailverified")
                })
                console.log("exist")
                history("/sign")
            }else{
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                    alert("Email verification sended")
                    {/*dispatch(contSlice.setUser({
                        uid:state.user.uid,
                        email:state.user.email
                    }))
                    history("/log")*/}
                })
              
                
            }
        }).catch((error)=>{
            console.log(error)
        })
            
    }
    const formData = (event)=>{
        event.preventDefault();
        if(password.current.value === passwordClone.current.value){
            logIn(email.current.value, password.current.value);
            var upperCaseLetters = /[A-Z]/g;
            var numbers = /[0-9]/g;
            if (password.current.value.match(upperCaseLetters) && password.current.value.match(numbers)){
                logIn(email.current.value, password.current.value);
            }else{
            console.log("no match")
        }
        }else{
            console.log("not same " + password + passwordClone)
        }
        
    }
    return(
        <form onSubmit={formData} className="logInForm">
            <label className="lblForGoogle">
                <GoogleAuth/>
            </label>
            <label htmlFor=""  className="lblForInp" required>Електронна адреса</label>
            <input type="email" ref={email} className="emailAddress" name="useEmail" required/>
            <label htmlFor="" className="lblForInp" minLength = "8">Пароль</label>
            <input type="password" ref={password}  className="passwordOfUser" minLength="8" required/>
            <label htmlFor="" className="lblForInp">Повторіть пароль</label>
            <input type="password" ref={passwordClone} className="confirmPasswordOfUser" required/>
            <label htmlFor="" className="lablOfCheckBox">Я погоджуюс з політикою конфіденсійності компанії Delta <input type="checkbox" className="agreeCheckBox" name="agree" required/></label>
            
            <div className="signInLogInCont"><p>Маєте аккаунт? <Link to="/sign" className="changeFormToSignIn">Увійти</Link></p><button className="createUserBt">Далі</button></div>
        </form>
    )
}