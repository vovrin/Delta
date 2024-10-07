import MapHomeImg from "../assets/imgs/Map.png"
export default function MapHome(){
    return(
        <section className="mapCont">
            <p>Мапа вільних авто</p>
            <img src={MapHomeImg} alt="mapCars" className="w-full"/>
        </section>
    )
}