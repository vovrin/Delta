import { signInWithPopup, browserSessionPersistence } from "firebase/auth";
import { auth, googleProvider } from "../data/firabase";
import { setPersistence } from "firebase/auth";
import { useDispatch } from "react-redux";
import { contSlice } from "../data/data";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/firabase";
import { useNavigate } from "react-router-dom";
export default function GoogleAuth(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signIn = async()=>{
        signInWithPopup(auth, googleProvider)
    .then(async(state)=>{
        const refToInf = doc(db, "users", state.user.uid);
        const date = await getDoc(refToInf);
            if (date.exists()){
                dispatch(contSlice.setUser({
                    uid:state.user.uid,
                    email:state.user.email
                }))
                const inf = date.data()
                dispatch(contSlice.setUserGlobInf({
                    name:inf.name,
                    surName:inf.surName,
                    middleName:inf.middleName,
                    phoneNumb:inf.phoneNumb,
                    dateOfBirth:inf.dateOfBirth,
                }))
                dispatch(contSlice.setProfPic({
                    profPict:state.user.photoURL
                }))
                navigate("/prof")
            }else{
                dispatch(contSlice.setUser({
                    uid:state.user.uid,
                    email:state.user.email
                }))
                navigate("/log")
            }
    })
    }
    
    return(
        <button type="button" className="googleAuthBtn" onClick={signIn}>Увійти за допомогою Google</button>
    )
}