import DownloadImg from "../assets/imgs/download.png";
import { useRef } from "react";
export default function RegistrationForm(){
    const addFiles = useRef();
    const numberT = useRef();
    const addFilesClick = ()=>{
        addFiles.current.click();
    }
  
    return(
        <>
        <form action="" className="firstStepRegForm wrapper">
            <div className="nameAndSurnameCont">
                <label htmlFor="">Ім'я <input type="text" className="nameOfUser" /></label>
                
                <label htmlFor="">Прізвище <input type="text" className="surNameOfUser"/></label>
                
            </div>
           
            <label htmlFor="">Побатькові <input type="text" className="middleNameOfUser" /></label>
            
            <label htmlFor="">Дата народження <input type="datetime-local" /></label>
            
            <label htmlFor="">Номер телефону <input type="tel" inputMode="numeric" maxLength="15" minLength="15" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" className="numOfTel" defaultValue="(+380)" /></label>
            
            <label htmlFor="">Електронна адреса <input type="email" /></label>
            
            <label htmlFor="" className="fileLabel">Також для продовження, необхідно надати водійське посвідчення <input type="file" ref={addFiles} className="addUserDoc"/> <button onClick={addFilesClick} className="addUserDocBtn">Завантажити документ <img src={DownloadImg} alt="" /></button></label>
            
            <div className="nextStepRegButCont"><button className="nextStepRegBut">Далі</button></div>
            
        </form>
        </>
    )
}