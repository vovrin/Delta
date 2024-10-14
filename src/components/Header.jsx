import React from "react";
import { Link } from "react-router-dom";
import DeltaImg from "../assets/imgs/Delta.svg";
import { useSelector } from "react-redux";
import { isAuth } from "../hooks/isAuth";
export default function Header(){
    let user = useSelector(state => state.user)
    return(
        <header>
            <div className="wrapper">
                <Link to="/"><div className="headerLogoWrapper"><img src={DeltaImg} alt="logo Delta" className="headerLogo"/></div></Link>
                <nav>
                    <ul>
                        <li><a href="">Регіон</a></li>
                        <li><a href="">Тарифи</a></li>
                        <li><a href="">Інформація</a></li>
                        <li><a href="">Контакти</a></li>
                    </ul>
                    <ul>
                        
                        <li>{isAuth().isAuth?<img src={user.porfPict}/>:<Link to="/sign">Увійти</Link>}</li>
                        <li><a href="">UA</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}