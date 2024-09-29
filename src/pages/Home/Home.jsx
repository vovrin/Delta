import Header from "../../components/Header";
import "../../assets/styles/pages/Home.scss";
import Section from "../../components/Section";
import AboutCard from "../../components/AboutCard";
import FooterHome from "../../components/FooterHome";
import SwiperHome from "../../components/SwiperHome";
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
            <div className="tarrifs wrapper">
                <div className="logoTarrifAb"><p>Тарифи</p></div>
                <div className="frTarrif">
                    <div className="purpHeader">
                        <span>
                            <p>Похвилинная</p>
                            <h1>23123213123123</h1>
                        </span>
                        
                        <p>Найкраще підходить для коротких поїздок</p>
                    </div>
                    <div className="addonsCard">
                        <ul>
                            <li>Включений пробіг</li>
                            <li>Бронювання</li>
                            <li>Очікування</li>
                            <li>Понад пробігу</li>
                        </ul>
                    </div>
                </div>
                <div className="scTarrif">
                    <div className="pinkHeader">
                        <span>
                            <p>Похвилинная</p>
                            <h1>23123213123123</h1>
                        </span>
                        <p>Найкраще підходить для коротких поїздок</p>
                    </div>
                    <div className="addonsCard">
                        <ul>
                            <li>Включений пробіг</li>
                            <li>Бронювання</li>
                            <li>Очікування</li>
                            <li>Понад пробігу</li>
                        </ul>
                    </div>
                </div>
                <div className="thrTarrif">
                    <div className="redHeader">
                        <span>
                            <p>Похвилинная</p>
                            <h1>23123213123123</h1>
                        </span>
                        <p>Найкраще підходить для коротких поїздок</p>
                    </div>
                    <div className="addonsCard">
                        <ul>
                            <li>Включений пробіг</li>
                            <li>Бронювання</li>
                            <li>Очікування</li>
                            <li>Понад пробігу</li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterHome></FooterHome>
        </div>
        </>
    )
}