import "../../assets/styles/pages/ListOfCars.scss";
import FooterHome from "../../components/FooterHome";
import Header from "../../components/Header";
import CarPreviewCard from "../../components/CarPreviewCardMini";
import FunnelImg from "../../assets/imgs/Funnel.png";
import AboutAutoPopup from "../../components/AboutAutoPopup";
import ToyotaBigImg from "../../assets/imgs/Cars/toyota/toyotaBig.png";
import RenoImg from "../../assets/imgs/Cars/reno.png";
import Toyota1Img from "../../assets/imgs/Cars/image5.png";
import HyundaiImg from "../../assets/imgs/Cars/image6.png";
import Hyundai1Img from "../../assets/imgs/Cars/Hyundai/image2.png";
import DaciaImg from "../../assets/imgs/Cars/Hyundai/image4.jpeg";
import AlertConfirmOrder from "../../components/AlertConfrimOrder";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
export default function ListOfCars(){
    const [isAlert, setAlert] = useState(false)
    

    const cars = [
        {
            mark:"TOYOTA",
            model:"Corolla",
            bImg:ToyotaBigImg,
            probig:"600 тис",
            year:2008,
            fuel:"6.4",
            maxPower:"132 к.с.",
            wheelDrive:"Передня",
            engine:"Valvematik",
            price:{
                min:3.51,
                hour:297,
                day:2050
            }
        },
        {
            mark:"Hyundai",
            model:"Elantra",
            bImg:Hyundai1Img,
            probig:"13 тис.",
            year:2022,
            fuel:"7",
            maxPower:"127 к.с.",
            wheelDrive:"Передня",
            engine:"Gamma 1.6 Mpi",
            price:{
                min:3.90,
                hour:438,
                day:2400
            }
        },{
            mark:"Renault",
            model:"Logan",
            bImg:RenoImg,
            probig:"300 тис.",
            year:2012,
            fuel:"6",
            maxPower:"75 к.с.",
            wheelDrive:"Передня",
            engine:"MТ5 2WD",
            price:{
                min:2.41,
                hour:211,
                day:1420
            }
        },{
            mark:"Decia",
            model:"Sandero",
            bImg:DaciaImg,
            probig:"33 тис.",
            year:2022,
            fuel:"5.4",
            maxPower:"65 к.с.",
            wheelDrive:"Передня",
            engine:"1.0 SCE",
            price:{
                min:2.39,
                hour:200,
                day:1220
            }
        },{
            mark:"Toyota",
            model:"Camry",
            bImg:Toyota1Img,
            probig:"10 тис.",
            year:2022,
            fuel:"6.5",
            maxPower:"204 к.с.",
            wheelDrive:"Передня",
            engine:"A25A-FKS",
            price:{
                min:548,
                hour:540,
                day:2900
            }
        },{
            mark:"Hyundai",
            model:"Sonata",
            bImg:HyundaiImg,
            probig:"8 тис.",
            year:2023,
            fuel:"7.7",
            maxPower:"204 к.с.",
            wheelDrive:"Передня",
            engine:"SmartStream G2.5 Gdi",
            price:{
                min:6,
                hour:600,
                day:3100
            }
        },

    ]
    return(
        <>
            <Header></Header>
            <AnimatePresence>
                {isAlert?<motion.div className="alertConfirmOrderCont" 
                exit={{ opacity: 0, scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}>
                    <div>
                        <p>Ваше замовлення сформоване успішно</p>
                    </div>
                    <p>Протягом найближчих 5-10 хвилин з вами зв'яжеться наж адміністратор для уточнення даних і підтвердження замовлення</p>
                </motion.div>:null}
                
            </AnimatePresence>
            <div className="carsBannerCont">
                <p>НАШІ АВТОМОБІЛІ</p>
            </div>
            <main className="wrapper">
                {/*<div className="filterCont">
                    <button className="filterBtn"><img src={FunnelImg}/>Фільтр</button>
                    <div className="filterList">
                        <ul>
                            <li className="tarrifsFilterBtn">Тарифи
                                <div className="tarrifsFilterCont">
                                    <ul>
                                        <li><div className="ekCol"></div>Економ</li>
                                        <li><div className="stCol"></div>Стандарт</li>
                                        <li><div className="coCol"></div>Комфорт</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="markFilterBtn">Марка
                                <div className="markFilterCont">
                                    <ul>
                                        <li><p>Приклад марки</p></li>
                                        <li>Приклад марки</li>
                                        
                                    </ul>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>*/}
                <div className="carsPreviewCardCont">
                    
                    {cars.map((val)=>{
                        return <CarPreviewCard tarrif="Стандарт" carInf={val} setA = {setAlert}/>
                    })}
                    {cars.map((val)=>{
                        return <CarPreviewCard tarrif="Економ" carInf={val} setA = {setAlert}/>
                    })}
                    {cars.map((val)=>{
                        return <CarPreviewCard tarrif="Комфорт" carInf={val} setA = {setAlert}/>
                    })}
                </div>
            </main>
            <FooterHome></FooterHome>
        </>
    )
}