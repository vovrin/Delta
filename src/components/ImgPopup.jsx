import { createPortal } from "react-dom"
export default function ImgPopup({imgURL, chState}){
    return createPortal(
        <div className="preciewCont">
            <div className="imgPreviewD">
                <div className="cancelBtn" onClick={()=>chState()}>
                </div>
                <img src={imgURL} alt=""  className="imgPreview"/>
            </div>
            
        </div>,
        document.getElementById("popups")
    )
}