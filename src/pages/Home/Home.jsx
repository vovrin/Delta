import Header from "../../components/Header";
import "../../assets/styles/pages/Home.scss";
import Section from "../../components/Section";
import AboutCard from "../../components/AboutCard";
import FooterHome from "../../components/FooterHome";
import SwiperHome from "../../components/SwiperHome";
import MapHome from "../../components/MapHome";
import Strilka from "../../assets/imgs/arrow-block-right.png"
import { setAuth } from "../../hooks/setAuth";
import {APIProvider} from '@vis.gl/react-google-maps';
import { getDocs, doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { db } from "../../data/firabase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Home(){
   
    return(
        <>
        <Header></Header>
            
        <div className="conteiner">
            <Section></Section>
           
            <AboutCard></AboutCard>
            
            <SwiperHome></SwiperHome>

            <div className="useGuideHome">
                <div className="wrapper">
                    <p>Як користуватися Delta</p>
                    <ul>
                        <li>Створити аканут в Delta</li>
                        <li>Обрати на мапінайближче до тебе авто.</li>
                        <li>Обирай авто, розблоковуй його за допомогою додатку, рушай</li>
                        <li>Завершуй поїздку в призначеному для цього місці, вказаному на мапі</li>
                    </ul>
                </div>
            </div>
            <div className="wrapper tarrifsCont">
            <div className="tarrifs">
                <div className="logoTarrifAb"><p>Тарифи</p></div>
                <div className="frTarrif">
                    <div className="purpHeader">
                        <span>
                            <p>ПОХВИЛИННА</p>
                            <h1>2.39 - 6.00 ₴/хв</h1>
                        </span>
                        
                        <p>Найкраще підходить для коротких поїздок</p>
                    </div>
                    <div className="addonsCard">
                        <ul>
                            <li><p>Включений пробіг</p> <p>0 км</p></li>
                            <li><p>Бронювання</p> <p>20 хв - 0₴</p></li>
                            <li><p>Очікування</p> <p>1₴ / 1 хв</p></li>
                            <li><p>Понад пробігу</p> <p>0₴</p></li>
                        </ul>
                    </div>
                </div>
                <div className="scTarrif">
                    <div className="pinkHeader">
                        <span>
                            <p>ПОГОДИННА</p>
                            <h1>196 - 605 ₴/год</h1>
                        </span>
                        <p>Чудово підійде для поїздки містомна декілька годин</p>
                    </div>
                    <div className="addonsCard">
                        <ul>
                            <li><p>Включений пробіг</p> <p>0 км</p></li>
                            <li><p>Бронювання</p> <p>20 хв - 0₴</p></li>
                            <li><p>Очікування</p> <p>1₴ / 1 хв</p></li>
                            <li><p>Понад пробігу</p> <p>0₴</p></li>
                        </ul>
                    </div>
                </div>
                <div className="thrTarrif">
                    <div className="redHeader">
                        <span>
                            <p>ДOБОВА</p>
                            <h1>1500 - 3000 ₴</h1>
                        </span>
                        <p>Для зручної подорожі на день чи довше</p>
                    </div>
                    <div className="addonsCard">
                        <ul>
                            <li><p>Включений пробіг</p> <p>0 км</p></li>
                            <li><p>Бронювання</p> <p>20 хв - 0₴</p></li>
                            <li><p>Очікування</p> <p>1₴ / 1 хв</p></li>
                            <li><p>Понад пробігу</p> <p>0₴</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="readMoreTarifBtnCont">
                <button className="readMoreTarifBtn">Читати докладніше про тарифи <img src={Strilka} alt="strilka" /></button>
            </div>
            
            </div>
            
            
            <MapHome></MapHome>
            <FooterHome></FooterHome>
        </div>
        </>
    )
}