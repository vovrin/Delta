import CarExImg from "../assets/imgs/Car_example.png";
import AboutAutoPopup from "./AboutAutoPopup";
import { useState } from "react";
import TarrifColGen from "./TarrifColGen";

export default function CarPreviewCardMini({carInf, tarrif, setA}){
    const [isPopup, setPopup] = useState(false)
    console.log(carInf)
    return(
        <div className="carPreviewCardCont">
            <p className="markCont">{carInf.mark}</p>
            <p className="modelCont">{carInf.model}</p>
            <img src={carInf.bImg} alt="photo" />
            <TarrifColGen tarrif={tarrif} ></TarrifColGen>
            <div className="abAutoBtnCont">
                <button onClick={()=>{
                    
                    setPopup(true)
                    document.body.style.overflow = "hidden"
                }}>Про авто</button>
            </div>
            {isPopup&&<AboutAutoPopup setAA = {setA} carInf={carInf} setAct ={setPopup} tarrif = {tarrif}/>}
        </div>
    )
}