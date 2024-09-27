import Dollar from "../assets/imgs/Dollar.svg";
import Easy from "../assets/imgs/Easy.svg";
import Fast from "../assets/imgs/Fast.png"
import Comfort from "../assets/imgs/Comfort.svg";
export default function AboutCard(){
    return(
        <section className="wrapper aboutCont">
            <ul className="cardsAb">
                <li className="Card1"><p>КАРШЕРІНГ DELTA - ЦЕ</p></li>
                <li>
                    <div>
                        <img src={Dollar} alt="Cheap" />
                        <h2>ДЕШЕВО</h2>
                        <p>Дешевше за таксі! Плати лише коли користуєшся</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={Easy} alt="Cheap" />
                        <h2>ПРОСТО</h2>
                        <p>Жодних ключів! Легко користуйся автом з зручним додатком</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={Fast} alt="Cheap" />
                        <h2>ШВИДКО</h2>
                        <p>Обирай улюблене авто і одразу в дорогу!</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={Dollar} alt={Comfort} />
                        <h2>КОМФОРТНО</h2>
                        <p>Не залеж від зовнішніх обставин! Створюй сам свою подорож</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}