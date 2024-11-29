import Header from "../../components/Header";
import "../../assets/styles/pages/Registration.scss"
import FooterHome from "../../components/FooterHome";
import { useState, useRef } from "react";
import { contSlice } from "../../data/data";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Registration(){
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const nameInp = useRef();
    const surNameInp = useRef();
    const middleNameInp = useRef()

    const [viewError, setError] = useState({
        email:null,
        name:null,
        surName:null,
        middleName:null,
    })

    const currYear = new Date().getFullYear();
    const currDay = new Date().getDate();
    const currMonth = new Date().getMonth() + 1;
    const currDayM = ()=>{
        if(currDay<10){
            return "0"+currDay;
        }else{
            return currDay;
        }
    }
    const currMonthM = ()=>{
        if(currMonth<10){
            return "0"+currMonth;
        }else{
            return currMonth;
        }
    }
    function checkData(data) {
        let isValid = true;
    
        if (!/^[а-яєґіїґʼa-z'-]+$/i.test(data.userName)) {
            nameInp.current.style.borderColor = "#FF0000";
            setError((inf) => ({ ...inf, name: "Поле повинно містити тільки літери" }));
            isValid = false;
        } else {
            nameInp.current.style.borderColor = "#D952FC";
            setError((inf) => ({ ...inf, name: true }));
        }
    
        if (!/^[а-яєґіїґʼa-z'-]+$/i.test(data.userSurName)) {
            surNameInp.current.style.borderColor = "#FF0000";
            setError((inf) => ({ ...inf, surName: "Поле повинно містити тільки літери" }));
            isValid = false;
        } else {
            surNameInp.current.style.borderColor = "#D952FC";
            setError((inf) => ({ ...inf, surName: true }));
        }
    
        if (!/^[а-яєґіїґʼa-z'-]+$/i.test(data.userMiddleName)) {
            middleNameInp.current.style.borderColor = "#FF0000";
            setError((inf) => ({ ...inf, middleName: "Поле повинно містити тільки літери" }));
            isValid = false;
        } else {
            middleNameInp.current.style.borderColor = "#D952FC";
            setError((inf) => ({ ...inf, middleName: true }));
        }
    
        return isValid;
    }
    
    function sendData(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
    
        if (checkData(data)) {
            console.log("All fields are valid");
            dispatch(contSlice.setUserGlobInf({
                name: data.userName,
                surName: data.userSurName,
                middleName: data.userMiddleName,
                phoneNumb: data.userNumOfTel,
                dateOfBirth: data.userBirthDay,
                
            }));
            dispatch(contSlice.setUser({
                email: data.userEmail,
            }))
            navigate("/registration2");
        } else {
            console.log("There are errors");
        }
    }
    const validDate = currYear-18+"-"+currMonthM() + "-"+currDayM();
    return(
        <>
        <Header></Header>
        <div className="contReg">
            <div className="wrapper regFormCont">
                <form action="" onSubmit={sendData}>
                    <label htmlFor="" className="userNameCont">
                        <p>Ім'я</p>
                        <input type="text" ref={nameInp} name="userName" className="userName" required/>
                        <p className="problemTxt">{viewError.name}</p>
                    </label>
                    <label htmlFor="" className="userSurNameCont">
                        <p>Прізвище</p>
                        <input type="text" ref={surNameInp} name="userSurName" className="userSurName" required/>
                        <p className="problemTxt">{viewError.surName}</p>
                    </label>
                    <label htmlFor="" className="userMiddleNameCont">
                        <p>По батькові</p>
                        <input type="text" ref={middleNameInp} name="userMiddleName" className="userMiddleName" required/>
                        <p className="problemTxt">{viewError.middleName}</p>
                    </label>
                    <label htmlFor="" className="userBirthDayCont">
                        <p>Дата народження</p>
                        <input type="date" name="userBirthDay" className="userBirthDay" min="1922-01-01" max ={validDate} required/>
                        <p className="problemTxt"></p>
                    </label>
                    <label htmlFor="" className="userNumOfTelCont">
                        <p>Номер телефону</p>
                        <input 
                        placeholder="+380XXXXXXXXX"
                        type="tel"
                        name="userNumOfTel"
                        pattern="^\+?3?8?(0\d{9})$"
                        minlength="13"
                        maxlength="13"  
                        className="userNumOfTel" required/>
                        <p className="problemTxt"></p>
                    </label>
                    <label htmlFor="" className="userEmailCont">
                        <p>Електронна адреса</p>
                        <input type="email" name="userEmail" className="userEmail" required/>
                        <p className="problemTxt"></p>
                    </label>
                    <div className="nexStepRegBtnCont">
                        <button className="nexStepRegBtn">Далі</button>
                    </div>
                </form>
            </div>
        </div>
        
        <FooterHome></FooterHome>
        </>
    )
}