
import { Link } from "react-router-dom";
import DeltaImg from "../assets/imgs/Delta.svg";
import { useSelector } from "react-redux";
import { useSetAuthState } from "../hooks/useSetAuthState";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignInPopPup from "./SignInPopPup";
export default function Header(){
    const [isMenu, setMenu] = useState(false)
    const navigate = useNavigate()
    function exitF(){
        const auth = getAuth()
        
        signOut(auth).then(()=>{
            location.reload()
            
        })
    }
    const {isLoading} = useSetAuthState()
    let iconH;
    const user = useSelector(state=>state.user);
    if (isLoading == true){
        console.log("set true")
        iconH =  iconH = <a>Очікую</a>
    }else if(user.isVerified != false){
        

            iconH = <a onClick={()=>{
                setMenu(state=>!state)
            }} className="imgLink"><div className="textProfImg" >{user.name.charAt(0)}</div><div>{user.name}</div></a>;

    }else{
        
        iconH = <div className="contSignInPop"><button className="signInShowBtn">Увійти</button>
            <SignInPopPup></SignInPopPup>
        </div>
        
    }
    
    return(
        <header>
            <div className="wrapper hdr">
                <Link to="/"><div className="headerLogoWrapper"><img src={DeltaImg} alt="logo Delta" className="headerLogo"/></div></Link>
                <nav className="navCont">
                    <ul className="navFSect">
                        <li><a href="">Регіон</a></li>
                        <li><a onClick={()=>navigate("/tariffs")}>Тарифи</a></li>
                        <li><a onClick={()=>navigate("/aboutUs")}>Про нас</a></li>
                        <li><a href="">Контакти</a></li>
                    </ul>
                    <ul className="navSSect">
                        <li>{iconH}{isMenu&&
                            <div className="menuProf">
                                <ul>
                                    <li><button onClick={()=>navigate("/prof")}>Акаунт</button></li>
                                    <li><button onClick={()=>exitF()}>Вийти</button></li>
                                </ul>
                            </div>}
                        </li>
                        <li><a href="">UA</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}