import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { db } from "../data/firabase";
import { getAuth } from "firebase/auth";
import { useRef } from "react";
import { contSlice } from "../data/data";
import { useNavigate } from "react-router-dom";
export default function SignInPopPup(){

    const dispatch = useDispatch()
    const emailInp = useRef();
    const passwordInp = useRef();
    const errorMsg = useRef()
        
    const navigate = useNavigate()
    const singIn = async (em, pas)=>{
        
        const auth = getAuth()
        signInWithEmailAndPassword(auth, em, pas).then(async (em)=>{
            
            const refToInf = doc(db, "users", em.user.uid);
            const data = await getDoc(refToInf);
            const inf = data.data()
            if (data.exists()){
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
                console.log("oh no")
            }
            
        }).catch((error)=>{
            if(error.code == "auth/invalid-credential"){
                errorMsg.current.style.color = "red"
                errorMsg.current.innerHTML = "неправильні дані"
            }
        })
            
    }

    function signInFunc(event){
        event.preventDefault();
        singIn(emailInp.current.value, passwordInp.current.value);

    }
    return(
        <div className="signInPopPupCont">
            <form onSubmit={signInFunc} action="" className="singInPopPupForm">
                <label htmlFor="">Пошта<input ref={emailInp} type="email"  className="emailAddresPopPup" required/></label>
                <label htmlFor="">Пароль<input ref={passwordInp} type="password"  minLength="8" className="passwordPopPup" required/></label>
                <p ref={errorMsg}></p>
                <div><button>Підтвердити</button></div>
            </form>
            <p>Ще не зареєструвались?</p>
            <button type="button" onClick={()=>navigate("/registration")}>Зареєструватись</button>
        </div>
    )
}