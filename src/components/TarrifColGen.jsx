export default function TarrifColGen({tarrif}){
    let style;
    switch(tarrif){
        case "Стандарт":
            style = "tarrifColor stCol";
            break;
        case "Економ":
            style = "tarrifColor ekCol"
            break;
        case "Комфорт":
            style = "tarrifColor coCol"
            break;
            
        }
    return(
        <div className="tarrifColCont">
            <div className={style}/> <p>{tarrif}</p>
        </div>
    )
}