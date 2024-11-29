import Header from "../../components/Header";
import "../../assets/styles/pages/Home.scss";
import Section from "../../components/Section";
import AboutCard from "../../components/AboutCard";
import FooterHome from "../../components/FooterHome";
import SwiperHome from "../../components/SwiperHome";
import Strilka from "../../assets/imgs/arrow-block-right.png"

import TariffTableGen from "../../components/TariffTableGen";

import ToyotaBigImg from "../../assets/imgs/Cars/toyota/toyotaBig.png";
import RenoImg from "../../assets/imgs/Cars/reno.png";
import Toyota1Img from "../../assets/imgs/Cars/image5.png";
import HyundaiImg from "../../assets/imgs/Cars/image6.png";
import Hyundai1Img from "../../assets/imgs/Cars/Hyundai/image2.png";
import DaciaImg from "../../assets/imgs/Cars/Hyundai/image4.jpeg";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
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
            
        <div className="conteiner">
            <Section></Section>
           
            <AboutCard></AboutCard>
            
            <SwiperHome carInf = {cars}></SwiperHome>

            <div className="useGuideHome">
                <div className="wrapper">
                    <p>Як користуватися Delta</p>
                    <ul>
                        <li>Створити аканут в <span>Delta</span></li>
                        <li>Обрати на мапінайближче до тебе авто.</li>
                        <li>Обирай авто, розблоковуй його за допомогою додатку, рушай</li>
                        <li>Завершуй поїздку в призначеному для цього місці, вказаному на мапі</li>
                    </ul>
                </div>
            </div>
            <div className="wrapper tarrifsCont" ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
                <div className="logoTarrifAb"><p>Тарифи</p></div>
                <TariffTableGen infCont = {{
                    min:{
                        diap:"2.39 - 6.00",
                        prob:"0",
                        wait:"0",
                        bron:"0",
                        ponad:"0"
                    },
                    hours:{
                        diap:"196 - 605",
                        prob:"0",
                        wait:"0",
                        bron:"0",
                        ponad:"0"
                    },
                    days:{
                        diap:"1500 - 3000",
                        prob:"0",
                        wait:"0",
                        bron:"0",
                        ponad:"0"
                    }
                    


                }
                }></TariffTableGen>
            <div className="readMoreTarifBtnCont">
                <button className="readMoreTarifBtn" onClick={()=>navigate("/tariffs")}>Читати докладніше про тарифи <img src={Strilka} alt="strilka" /></button>
            </div>
            
            </div>
            
            
            
            <FooterHome></FooterHome>
        </div>
        </>
    )
}