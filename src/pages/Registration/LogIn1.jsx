import Header from "../../components/Header";
import FooterHome from "../../components/FooterHome";
import LogInForm1 from "../../components/LogInFrom1";
import "../../assets/styles/pages/Registration.scss";
export default function LogIn1(){
    return(
        <>
            <Header></Header>
                <div className="regFormCont wrapper">
                    <LogInForm1></LogInForm1>
                </div>
            <FooterHome></FooterHome>
        </>
    )
}