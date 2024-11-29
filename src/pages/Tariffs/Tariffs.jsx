import Header from "../../components/Header";
import FooterHome from "../../components/FooterHome";
import "../../assets/styles/pages/Tariffs.scss";
import SwipperTariffs from "../../components/SwiperTariffs";
export default function Tariffs(){
    return(
        <>
        <Header></Header>
        <div className="tariffsBannerCont">
            <p>Тарифи</p>
        </div>
        <SwipperTariffs></SwipperTariffs>
        <FooterHome></FooterHome>
        </>
    )
}