import React from "react";
import DeltaImg from "../assets/imgs/Delta.svg";
export default function Header(){
    return(
        <header>
            <div className="wrapper">
                <div className="headerLogoWrapper"><img src={DeltaImg} alt="logo Delta" className="headerLogo"/></div>
                <nav>
                    <ul className="flex gap-5">
                        <li><a href="">Регіон</a></li>
                        <li><a href="">Тарифи</a></li>
                        <li><a href="">Інформація</a></li>
                        <li><a href="">Контакти</a></li>
                    </ul>
                    <ul className="flex gap-5">
                        <li><a href="">Увійти</a></li>
                        <li><a href="">UA</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}