import { createPortal } from "react-dom"
import TarrifColGen from "./TarrifColGen"
import { deleteDoc } from "firebase/firestore"
import { doc } from "firebase/firestore"
import { db } from "../data/firabase"
import { updateDoc } from "firebase/firestore"
export default function AdminPanelPopup({inf, state}){
    async function deleteDocs(){
        await deleteDoc(doc(db, "tickets", inf.user_id_tick))
        state(false)
        location.reload()
    }
    async function confrimDoc() {
        updateDoc(doc(db, "tickets", inf.user_id_tick), {
            "is_confirmed":true
        })
        state(false)
    }
    return createPortal(
        <div className="adminPanelPopupBgCont">
            <div className="adminPanelPopupCont">
                <div>ID користувача:<span>{inf.user_id_tick}</span></div>
                <div>Ім'я користувача:<span>{inf.userName_tick}</span></div>
                <div>Прізвище користувача:<span>{inf.surname_tick}</span></div>
                <div>Номер телефону користувача:<span>{inf.phone_nb_tick}</span></div>
                <div>Дата оформлення:<span>{inf.time}</span></div>
                <div>Дані автомобіля: <span>{inf.car_inf.mark} {inf.car_inf.model}</span><img src={inf.car_inf.bImg}/> </div>
                <div>Обраний тариф:   <TarrifColGen tarrif={inf.car_tarrif}/></div>
                <div className="btnContAdmin">
                    <button className="cnclAdminn" onClick={()=>deleteDocs()}>{inf.is_confirmed?"Завершити замовлення":"Скасувати замовлення"}</button>
                    {inf.is_confirmed?"":<button className="confAdminn" onClick={()=>confrimDoc()}>Підтвердити замовлення</button>}
                </div>
            </div>
        </div>
        ,
        document.getElementById("popups")
    )
}