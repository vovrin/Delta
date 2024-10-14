import Header from "../../components/Header"
import FooterHome from "../../components/FooterHome"
import SignInForm from "../../components/SignInForm";
import "../../assets/styles/pages/Registration.scss";
export default function SignIn(){
    return(
        <>
        <Header></Header>
            <div className="regFormCont wrapper">
                <SignInForm></SignInForm>
            </div>
        <FooterHome></FooterHome>
        </>
    )
}