import Delta_white from "../assets/imgs/Delta_white.svg"
export default function FooterHome(){
    return(
        <>
            <footer>
                <div className="footerHomeCont wrapper">
                    <div className="footerInf1">
                        <img src={Delta_white} alt="" />
                        <ul>
                            <li>Тех підтримка</li>
                            <li><a href="tel:+380691234567">Тел.: +380691234567</a></li>
                            <li><a href="mailto:customersupport@delta.com.ua">Електронна пошта:<br></br>
                            customersupport@delta.com.ua</a></li>
                            <li><a href="mailto:job@delta.com.ua">Для співробітництва:<br></br>
                            job@delta.com.ua</a></li>
                            <li><a href="mailto:collaboration@delta.com.ua">collaboration@delta.com.ua</a></li>
                        </ul>
                    </div>
                    <div className="footerInf2">
                        <ul>
                            <li><a href="">Регіон</a></li>
                            <li><a href="">Тарифи</a></li>
                            <li><a href="">Автомобілі</a></li>
                            <li><a href="">Інформація</a></li>
                            <li><a href="">Котакти</a></li>
                        </ul>
                    </div>
                    <div className="footerInf3">
                        <ul>
                            <li><a href="">Увійти</a></li>
                            <li><a href="">Мова</a></li>

                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}