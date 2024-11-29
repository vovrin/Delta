import { useState } from "react";
import AdminPanelPopup from "./adminPanelPopup";
export default function UserReqCont({val}){
    const [isPopup, setPopup] = useState(false)
    console.log(val)
    return(

        <div className="userReqCont">
                <p>userId: {val.user_id_tick}</p>
                {isPopup&&<AdminPanelPopup inf = {val} state ={setPopup}/>}
                <button  className={val.is_confirmed?"disButton":"comButton"} onClick={()=>setPopup(true)}>розглянути</button>
        </div>
    )
}