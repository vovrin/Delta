import DowImg from "../assets/imgs/download.png"
export default function DownloadDocRegPopop({functCls}){
    return(
        <div className="fonOfPopup">
            <div className="popupRegFileCont">
                <div className="docContFileReg">
                    <p>Водійське посвідчення</p>
                    <input type="file" />
                    <button className="downloadDocBtn"><img src={DowImg}/>Завантажити документ</button>
                </div>
                <div className="docContFileReg">
                    <p>Паспорт</p>
                    <p>(не обов'язково)</p>
                    <input type="file" />
                    <button className="downloadDocBtn"><img src={DowImg}/>Завантажити документ</button>
                </div>
                <div className="confirmFileRegCont"><button className="confirmFileReg" onClick = {()=>functCls(false)}>Підтвердити</button></div>
            </div>
        </div>
    )
}