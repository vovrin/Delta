import Header from "../../components/Header";
import FooterHome from "../../components/FooterHome";
import DownImg from "../../assets/imgs/download.png";
import "../../assets/styles/pages/Registration2.scss";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Eye from "../../assets/imgs/Eye.png";
import EyeCls from "../../assets/imgs/EyeCls.png";
import { db } from "../../data/firabase";
import { doc,setDoc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { sendEmailVerification } from "firebase/auth";
import { EmVerPopPup } from "../../components/EmVerPopPup";
import { useDispatch } from "react-redux";
import { contSlice } from "../../data/data";
export default function Registration2(){
    const dispatch = useDispatch()

    const [emVer, setEmVer] = useState(false)

    const userInf = useSelector(state => state.user);

    const [pass1Eye, setPass1Eye] = useState(false);
    const [pass2Eye, setPass2Eye] = useState(false);

    const navigate = useNavigate()

    const passwordInp = useRef();
    const passwordCheckInp = useRef();
    const passError = useRef();
    const pass2Error = useRef();

    function showPass1(){
        switch(passwordInp.current.type){
            case "text":
                passwordInp.current.type = "password";
                setPass1Eye(false)
                break;
            case "password":
                passwordInp.current.type = "text";
                setPass1Eye(true)
                break;
        }
        
    }
    function showPass2(){
        switch(passwordCheckInp.current.type){
            case "text":
                passwordCheckInp.current.type = "password";
                setPass2Eye(false)
                break;
            case "password":
                passwordCheckInp.current.type = "text";
                setPass2Eye(true)
                break;
        }
        
    }
    

    const reg = async() => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userInf.email, passwordInp.current.value).then(async(state)=>{
            const refToInf = doc(db, "users", state.user.uid);
            const data = await getDoc(refToInf);
            if(data.exists()){
                console.log("data exist");
            }else{
                console.log(userInf)
                sendEmailVerification(state.user).then( async()=>{
                    await setDoc(refToInf, userInf)
                    setEmVer(true);

                })
                
            }

        }).catch((error)=>{
            console.log(error.code)
            if(error.code == "auth/email-already-in-use"){
                pass2Error.current.innerHTML = "дана пошта використовується іншим користувачем";
            }
        })
    }

    function regFunc(event){
        event.preventDefault();
        if(passwordInp.current.value === passwordCheckInp.current.value){
    
            pass2Error.current.innerHTML = "";
            passwordCheckInp.current.style.borderColor = "#D952FC";
            var upperCaseLetters = /[A-Z]/g;
            var numbers = /[0-9]/g;
            
            if (passwordInp.current.value.match(upperCaseLetters) && passwordInp.current.value.match(numbers)){
                passError.current.innerHTML = "";
                passwordInp.current.style.borderColor = "#D952FC";
                reg()
            }else{
                passwordInp.current.style.borderColor = "#FF0000";
                passError.current.innerHTML = "пароль повинен містити хочаб одну велику літеру та цифру";
            }
        }else{
            pass2Error.current.innerHTML = "паролі не співпадають";
            passwordCheckInp.current.style.borderColor = "#FF0000";
        }
    }
    return(
        <>
        <Header></Header>
        {emVer&&<EmVerPopPup/>}
        <div className="reg2Cont">
            <div className="wrapper reg2FormCont">
                <form action="" onSubmit={regFunc}>
                    <label htmlFor="" className="userPasswordCont">
                        <p>Пароль</p>
                        <div className="imgEyeCont"><img onClick={showPass1} src={pass1Eye?Eye:EyeCls}/><input type="password" minLength = "8" ref={passwordInp} className="userPassword" required/></div>
                        
                        <p className="problemTxt" ref={passError}></p>
                    </label>
                    <label htmlFor="" className="userPasswordCheckCont">
                        <p>Підтвердити пароль</p>
                        <div className="imgEyeCont"><img onClick={showPass2} src={pass2Eye?Eye:EyeCls}/> <input type="password" minLength = "8" ref={passwordCheckInp} className="userPasswordCheck" required/></div>
                        <p className="problemTxt" ref={pass2Error}></p>
                    </label>
                    
                    <label htmlFor="" className="polCont">
                        <p>Я погоджуюсь з політикою конфеденційності Delta</p>
                        <input type="checkbox" required/>
                    </label>
                    <div className="reg2ButCont">
                        <button type="button" className="turnBackBtn" onClick={()=>navigate("/registration")}>Повернутись</button>
                        <button className="endRegBtn">ЗАВЕРШИТИ</button>
                    </div>
                </form>
            </div>
        </div>
        <FooterHome></FooterHome>
        </>
    )
}