import Header from "../../components/Header";
import FooterHome from "../../components/FooterHome";
import Star from "../../assets/imgs/Star.png";
import Question from "../../assets/imgs/Question.png";
import HandShake from "../../assets/imgs/HandShake.png";
import "../../assets/styles/pages/AboutUs.scss";
export default function AboutUs(){
    return(
        <div className="infoWrapper">
        <Header></Header>
        <article className="aboutInfoCont wrapper">
            <p className="about1">Про нас</p>
            <div className="whatIsDeltaCont">
                <p>Що таке проєкт <span className="delta1">Delta</span></p>
                <span><span>Delta</span> - сучасна агенція з каршерінгу, якій вдається поєднати найкращі сучасні технології за для надання найякісніших послуг нашим клієнтам.</span>
                <img src={Star} alt="star" />
            </div>
            <div className="deltaPruproseCont">
                <img src={Question} alt="question" />
                <p>Яка наша мета</p>
                <span><span>Наша мета</span> -  використовуючи всі сучасні технології зробити пересування нашим містом простим і доступним кожному. Ми об’єднали всі найкращі технології які довели свою ефективність і надійність оному застосунку з якими ви завжди швидко і легко зможете подорожувати містом.</span>
            </div>
            <div className="ourServicesCont">
                <p>Наші послуги</p>
                <span><span>Оренда</span> -  з нами, ви можете в декілька кліків взяти в оренду будь-яке авто. Доступ до авто ви отримуєте через зручний додаток, який буде вам і ключами, і документами на авто, і способом проплати.</span>
                <span><span>Шерінг</span> - якщо ви маєте власне авто, то ви можете долучитись до проєкту. З зручною адмін панелю, ви можете додати власне авто до нашого автопарку.</span>
                <img src={HandShake} alt="handshake" />
            </div>
        </article>
        <FooterHome></FooterHome>
        </div>
    )
}