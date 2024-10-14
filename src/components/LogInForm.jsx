import DownloadImg from "../assets/imgs/download.png";
import { useRef } from "react";
import { useState } from "react";
import { db } from "../data/firabase";
import { addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { auth } from "../data/firabase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { contSlice } from "../data/data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function LogInForm(){
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [file, setFile] = useState();
    const addFiles = useRef();
    
    const addFilesClick = ()=>{
        addFiles.current.click();
    }
    const changeFile = ()=>{
        console.log(addFiles.current.files)
        setFile(URL.createObjectURL(addFiles.current.files[0]))
    }
    function ch(){
        console.log("yes")
    }
    const onSubmit = async(d)=>{
        const docc = doc(db, "users", user.uid);
        await setDoc(docc, d);
        dispatch(contSlice.setUserGlobInf({
            name:d.name,
            surName:d.surName,
            middleName:d.middleName,
            phoneNumb:d.phoneNumb,
            dateOfBirth:d.dateOfBirth
        }))
        navigate("/prof")
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries())
        
        const authData = {
            name:data.userName,
            surName:data.userSurName,
            middleName:data.userMiddleName,
            phoneNumb:data.userNumOfTel,
            dateOfBirth:data.userBirthDay,
        }
        onSubmit(authData)
    }
    return(
        <form onSubmit={handleSubmit} className="secondStepRegForm">
            <label htmlFor="" className="lblForInp">Ім'я </label>
            <div className="nameAndSurnameCont">
               <input type="text" className="nameOfUser" name="userName" required/>
                
                <label htmlFor="">Прізвище <input type="text" className="surNameOfUser" name="userSurName" required/></label>
                
            </div>
           
            <label htmlFor="" className="lblForInp">Побатькові </label>
            <input type="text" className="middleNameOfUser" name="userMiddleName" required />
            
            <label htmlFor="" className="lblForInp">Дата народження </label>
            <input type="date" className="birthDate" name="userBirthDay" required/>
            
            <label htmlFor="" className="lblForInp">Номер телефону </label>
            <input type="tel" inputMode="numeric" className="numOfTel" name="userNumOfTel"  required />
            <label htmlFor="" className="fileLabel">Також для продовження, необхідно надати водійське посвідчення <input onChange ={changeFile  } type="file" name="userFile" ref={addFiles} className="addUserDoc"/> <button onClick={addFilesClick} className="addUserDocBtn">Завантажити документ <img src={DownloadImg} alt="" /></button>
            <img src={file} alt=""  className="uploadedImg"/>
            </label>
            
            <div className="nextStepRegButCont"><button className="nextStepRegBut">Далі</button> <Link to="/prof">До дому</Link></div>
            
        </form>
        
    )
}