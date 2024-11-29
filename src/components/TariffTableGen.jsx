export default function TariffTableGen({infCont}){
    return(
        
        <div className="tarrifs">
                <div className="frTarrif">
                    <div className="purpHeader">
                        <span>
                            <p>ПОХВИЛИННА</p>
                            <h1>{infCont.min.diap} ₴/хв</h1>
                        </span>
                        
                        <p>Найкраще підходить для коротких поїздок</p>
                    </div>
                    <div className="addonsCard">
                        <ul>
                            <li><p>Включений пробіг</p> <p>{infCont.min.prob} км</p></li>
                            <li><p>Бронювання</p> <p>20 хв - {infCont.min.bron}₴</p></li>
                            <li><p>Очікування</p> <p>{infCont.min.wait}₴ / 1 хв</p></li>
                            <li><p>Понад пробігу</p> <p>{infCont.min.ponad}₴</p></li>
                        </ul>
                    </div>
                </div>
                <div className="scTarrif">
                    <div className="pinkHeader">
                        <span>
                            <p>ПОГОДИННА</p>
                            <h1>{infCont.hours.diap} ₴/год</h1>
                        </span>
                        <p>Чудово підійде для поїздки містомна декілька годин</p>
                    </div>
                    <div className="addonsCard">
                        <ul>
                            <li><p>Включений пробіг</p> <p>{infCont.hours.prob} км</p></li>
                            <li><p>Бронювання</p> <p>20 хв - {infCont.hours.bron}₴</p></li>
                            <li><p>Очікування</p> <p>{infCont.hours.wait}₴ / 1 хв</p></li>
                            <li><p>Понад пробігу</p> <p>{infCont.hours.ponad}₴</p></li>
                        </ul>
                    </div>
                </div>
                <div className="thrTarrif">
                    <div className="redHeader">
                        <span>
                            <p>ДOБОВА</p>
                            <h1>{infCont.days.diap} ₴</h1>
                        </span>
                        <p>Для зручної подорожі на день чи довше</p>
                    </div>
                    <div className="addonsCard">
                        <ul>
                            <li><p>Включений пробіг</p> <p>{infCont.days.prob} км</p></li>
                            <li><p>Бронювання</p> <p>20 хв - {infCont.days.bron}₴</p></li>
                            <li><p>Очікування</p> <p>{infCont.days.wait}₴ / 1 хв</p></li>
                            <li><p>Понад пробігу</p> <p>{infCont.days.ponad}₴</p></li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}