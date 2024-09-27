import Header from "../../components/Header";
import "../../assets/styles/pages/Home.scss";
import Section from "../../components/Section";
import AboutCard from "../../components/AboutCard";
import FooterHome from "../../components/FooterHome";
export default function Home(){
    return(
        <>
            <Header></Header>
            <Section></Section>
            
            <AboutCard></AboutCard>
            <FooterHome></FooterHome>
        </>
    )
}