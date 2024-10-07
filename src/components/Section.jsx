import sectImg from "../assets/imgs/First_screen.svg" 
export default function Section(){
    return(
        <section className="aboutComp">
            <div className="bgAboutCont">
                <img src={sectImg} alt="sectImg" />
            </div>
            <div className="aboutText">
                <article className="flex flex-col gap-6">
                    <p className="carSharingH1">CAR SHARING</p>
                    <p className="deltaTextH1">DELTA</p>
                    <p className="purposeTextH1">Наша мета - зробити пересування нашим містом простим і доступним кожному. Бери своє улюблене авто і вільно подорожуй Львовом без обмежень</p>
                    <div className="flex flex-row gap-10">
                        <button className="chooseCar">Обрати Авто</button>
                        <button className="info">Інформація</button>
                    </div>
                </article>
            </div>
        </section>
    )
}