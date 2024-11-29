import { createPortal } from "react-dom";
import ExitImg from "../assets/imgs/ArrowFatLeft.png";
import BgToyotaImg from "../assets/imgs/Cars/toyota/toyotaBig.png";
import TariffTableGen from "./TariffTableGen";
import TarrifColGen from "./TarrifColGen";
import { setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../data/firabase";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
export default function AboutAutoPopup({carInf, setAct, tarrif, setAA}){
    
    const user = useSelector(state=>state.user)
    function getCurrentTimeDetails() {
        const now = new Date();
        const details = {
            hour: now.getHours(),       // Година
            minute: now.getMinutes(),   // Хвилина
            month: now.getMonth() + 1,  // Місяць (додаємо 1, бо місяці починаються з 0)
            year: now.getFullYear()     // Рік
        };
        const formated = details.hour+":"+details.minute+ " "+ details.month +"."+ details.year;
        return formated;
    }
    const MakeCall = async()=>{
        const tiket = {
            is_confirmed:false,
            phone_nb_tick:user.phoneNumb,
            surname_tick:user.surName,
            user_id_tick:user.uid,
            userName_tick:user.name,
            car_tarrif:tarrif,
            car_inf:carInf,
            time: getCurrentTimeDetails(),
            
        }
        const refToInf = doc(db, "tickets", user.uid);
        const data = await getDoc(refToInf);
        if(data.exists()){
            console.log("oreder exist")
        }else{
            setAct(false)
            setAA(true)
            await setDoc(refToInf,tiket).catch((error)=>{
                console.log(error.code)
            })
            setTimeout(()=>setAA(false), 5000);
            document.body.style.overflow = "visible";
        }
        
        
        
    }

    return createPortal(
        <div className="aboutAutoPopupBgCont">
            <div className="aboutAutoPopupCont">
                <div className="clsAboutAutoPopupBtnCont">
                    <button onClick={()=>{
                        document.body.style.overflow = "visible"
                        setAct((state)=>!state)}} className="clsAboutAutoPopupBtn">
                        <img src={ExitImg} alt="" />
                    </button>
                </div>
                
                
                <div className="aboutAutoPopupInfCont">
                    <div className="initalAutoCont">
                        <div className="imgContAuto">
                            <img src={carInf.bImg} alt="" />
                        </div>
                        
                        <div>
                            <p>Марка:<span>{carInf.mark}</span></p>
                            <p>Модель:<span>{carInf.model}</span></p>
                            <p>Тариф:<TarrifColGen tarrif={tarrif}></TarrifColGen></p>
                        </div>
                        <div>
                            <p>Рік:<span>{carInf.year}</span></p>
                            <p>Пробіг:<span>{carInf.probig}</span></p>
                        </div>
                    </div>
                    
                    
                    <TariffTableGen infCont = {{
                    min:{
                        diap:carInf.price.min,
                        prob:"0",
                        wait:"0",
                        bron:"0",
                        ponad:"0"
                    },
                    hours:{
                        diap:carInf.price.hour,
                        prob:"0",
                        wait:"0",
                        bron:"0",
                        ponad:"0"
                    },
                    days:{
                        diap:carInf.price.day,
                        prob:"0",
                        wait:"0",
                        bron:"0",
                        ponad:"0"
                    }
                    


                }
                }></TariffTableGen>
                    <div className="charAboutAutoPopupCont">
                        <p>Характеристики авто</p>
                        <div className="charAboutAutoPopup">
                            <div>
                                <p className="greySmallTxt">Споживання авто</p>
                                <p>{carInf.fuel}</p>
                            </div>
                            <div>
                                <p className="greySmallTxt">Максимальна потужність</p>
                                <p>{carInf.maxPower}</p>
                            </div>
                            <div>
                                <p className="greySmallTxt">Привід</p>
                                <p>{carInf.wheelDrive}</p>
                            </div>
                            <div>
                                <p className="greySmallTxt">Двигун</p>
                                <p>{carInf.engine}</p>
                            </div>
                        </div>
                    </div>
                    <div className="makeCallBtnCont">
                        <motion.button onClick={()=>MakeCall()} >Замовити дзвінок</motion.button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>,
        document.getElementById("popups")
    )
}