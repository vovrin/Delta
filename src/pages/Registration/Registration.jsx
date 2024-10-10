import Header from "../../components/Header";
import FooterHome from "../../components/FooterHome";
import RegistrationForm from "../../components/RegistrationForm";
import "../../assets/styles/pages/Registration.scss";
export default function Registration(){
    return(
        <>
            <Header></Header>
            <RegistrationForm></RegistrationForm>
            <FooterHome></FooterHome>
        </>
    )
}