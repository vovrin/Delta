import Header from "../../components/Header";
import FooterHome from "../../components/FooterHome";
import "../../assets/styles/pages/Profile.scss";
import Reit from "../../assets/imgs/Ellipse7.png"
import { useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../../data/firabase";
import { useSelector } from "react-redux";
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
                <img src={user.profPict} alt="photo" className="profPict"/>
                <p>{user.name} {user.surName} {user.middleName}</p>
            </div>
            <div className="roadsButts">
                <button>Історія Поїздок</button>
                <button>Майбутні поїздки</button>
                <button>Пресети</button>
            </div>
        </section>
        <section className="infAbUser wrapper">
            <p>Інформація</p>
            <div>
                <label htmlFor="">Імя</label>
                <p>{user.name}</p>
                <label htmlFor="">Прізвище</label>
                <p>{user.surName}</p>
                <label htmlFor="">Побатькові</label>
                <p>{user.middleName}</p>
                <label htmlFor="">Номер Телефону</label>
                <p>{user.phoneNumb}</p>
                <label htmlFor="">Електронна пошта</label>
                <p>{user.email}</p>
                <button>Оновити</button>
            </div>
        </section>
        <FooterHome></FooterHome>
        </>
    )
}