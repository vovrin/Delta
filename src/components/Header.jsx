import React from "react";
import { Link } from "react-router-dom";
import DeltaImg from "../assets/imgs/Delta.svg";
import { useSelector } from "react-redux";
import { isAuth2 } from "../hooks/isAuth2";
import { setAuth } from "../hooks/setAuth";
import { useNavigate } from "react-router-dom";

export default function Header(){
    setAuth()
    const isAut = isAuth2();
    console.log(isAut)
    let iconH;
    const user = useSelector(state=>state.user)
    if(isAut.userInf == true){
        if(user.profPict != null){
            iconH = <a onClick={()=>navigate("/prof")} className="imgLink"><img className="profPictH" onClick={()=>navigate("/prof")} src={user.profPict}/><div className="nameContH">{user.name}</div></a>
        }else{

            iconH = <a onClick={()=>navigate("/prof")} className="imgLink"><div className="textProfImg" >{user.name.charAt(0)}</div><div>{user.name}</div></a>;
        }
    }else{
        
        iconH = <Link to="/sign">Увійти</Link>
    }
    const navigate = useNavigate()
    return(
        <header>
            <div className="wrapper hdr">
                <Link to="/"><div className="headerLogoWrapper"><img src={DeltaImg} alt="logo Delta" className="headerLogo"/></div></Link>
                <nav className="navCont">
                    <ul className="navFSect">
                        <li><a href="">Регіон</a></li>
                        <li><a href="">Тарифи</a></li>
                        <li><a onClick={()=>navigate("/aboutUs")}>Про нас</a></li>
                        <li><a href="">Контакти</a></li>
                    </ul>
                    <ul className="navSSect">
                        <li>{iconH}</li>
                        <li><a href="">UA</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}