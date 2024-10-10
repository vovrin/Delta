import React from "react";
import { Link } from "react-router-dom";
import DeltaImg from "../assets/imgs/Delta.svg";
import Registration from "../pages/Registration/Registration";
export default function Header(){
    return(
        <header>
            <div className="wrapper">
                <div className="headerLogoWrapper"><img src={DeltaImg} alt="logo Delta" className="headerLogo"/></div>
                <nav>
                    <ul>
                        <li><a href="">Регіон</a></li>
                        <li><a href="">Тарифи</a></li>
                        <li><a href="">Інформація</a></li>
                        <li><a href="">Контакти</a></li>
                    </ul>
                    <ul>
                        <li><Link to="/reg">Увійти</Link></li>
                        <li><a href="">UA</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}