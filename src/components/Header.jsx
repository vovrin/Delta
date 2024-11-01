import React from "react";
import { Link } from "react-router-dom";
import DeltaImg from "../assets/imgs/Delta.svg";
import { useSelector } from "react-redux";
import { useSetAuthState } from "../hooks/useSetAuthState";

import { useNavigate } from "react-router-dom";

export default function Header(){
    const {isLoading} = useSetAuthState()
    let iconH;
    const user = useSelector(state=>state.user);
    if (isLoading == true){
        iconH =  iconH = <Link to="/sign">Увійти</Link>
    }else if(user.surName != undefined){
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