import Header from "../../components/Header";
import FooterHome from "../../components/FooterHome";
import "../../assets/styles/pages/Profile.scss";
import Reit from "../../assets/imgs/Ellipse7.png"
import { useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../../data/firabase";
import { useSelector } from "react-redux";
import { setAuth } from "../../hooks/setAuth";
export default function Profile(){
    
    const user = useSelector(state=>state.user)
    console.log(user)
    return(
        <>
        <Header></Header>
        <section className="usrRoadInf wrapper">
            <div className="ratingCont">
                <img src={Reit} alt="" className="reit"/>
                <p>Ваш рейтинг поїздок</p>
            </div>
            <div className="shortAb">
                <div className="profPict">Ваше фото</div>
                <p>{user.name} {user.surName} {user.middleName}</p>
            </div>
            <div className="roadsButts">
                <button>Історія Поїздок</button>
                <button>Майбутні поїздки</button>
                <button>Пресети</button>
            </div>
        </section>
        
        <section className="infAbUser wrapper">
            <p className="infTxtCont1">Інформація</p>
            <div className="initInfCont">
                <label htmlFor="">Ім'я</label>
                <p>{user.name}</p>
                <label htmlFor="">Прізвище</label>
                <p>{user.surName}</p>
                <label htmlFor="">Побатькові</label>
                <p>{user.middleName}</p>
                <label htmlFor="">Номер Телефону</label>
                <p>{user.phoneNumb}</p>
                <label htmlFor="">Електронна пошта</label>
                <p>{user.email}</p>
                <div><button className="updateButProf">Оновити</button></div>
                
            </div>
        </section>
        <section className="useDocCont wrapper">
            <div className="useDoc">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <label htmlFor="">Додано</label>
                    <p>31.02.2000</p>
                    <label htmlFor="">Оновлено</label>
                    <p>07.03.2023</p>
                </div>
            </div>
        </section>
        <FooterHome></FooterHome>
        </>
    )
}