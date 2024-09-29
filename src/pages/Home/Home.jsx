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
        </div>
        </>
    )
}