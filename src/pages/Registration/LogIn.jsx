import Header from "../../components/Header";
import FooterHome from "../../components/FooterHome";
import LogInForm from "../../components/LogInForm";
import "../../assets/styles/pages/Registration.scss";
export default function LogIn(){
    return(
        <>
            <Header></Header>
                <div className="regFormCont wrapper">
                    <LogInForm></LogInForm>
                </div>
            <FooterHome></FooterHome>
        </>
    )
}