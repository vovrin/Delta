import Header from "../../components/Header";
import FooterHome from "../../components/FooterHome";
import "../../assets/styles/pages/Profile.scss";
import Reit from "../../assets/imgs/Ellipse7.png"
import { useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../../data/firabase";
import { useSelector } from "react-redux";
import Star1 from "../../assets/imgs/Star1.png"
import Doc1 from "../../assets/imgs/doc1.png"
import UserPhoto from "../../assets/imgs/Photouser.png"
import AdminPanel from "../../components/AdminPanel";
import VectImg from "../../assets/imgs/Vector.png";
import AdminImg from "../../assets/imgs/photo_of_admin.png"
export default function Profile(){
    
    const user = useSelector(state=>state.user)
    console.log(user.type)
    return(
        <>
        <Header></Header>
        <div className="profInfCont wrapper">
            <div className="shortProfInfCont">
                <div className="userPhotRatCont">
                    <img src={user.type == "user"?UserPhoto:AdminImg} alt="" className="userBigPhoto"/>
                    <div className="userRating">
                        <img src={user.type == "user"?Star1:VectImg} alt="" />
                        <p>4.6</p>
                    </div>
                </div>
                <div className="fullNameCont">
                    <p className="grTxt">Ім'я</p>
                    <p>{user.name}</p>
                    <p className="grTxt">Прізвище</p>
                    <p >{user.surName}</p>
                    <p className="grTxt">По батькові</p>
                    <p>{user.middleName}</p>
                </div>
                
            </div>
            {user.type == "admin"?<AdminPanel/>:<div className="fullUserInfCont">
                <div className="fullProfInfCont">
                    <p className="inforText">Інформація</p>
                    <div className="fullProfInfText">
                        <div>
                            <p className="grTxtL">Ім'я</p>
                            <p>{user.name}</p>
                        </div>
                        <div>
                            <p className="grTxtL">Прізвище</p>
                            <p>{user.surName}</p>
                        </div>
                        <div>
                            <p className="grTxtL">По батькові</p>
                            <p>{user.middleName}</p>
                        </div>
                        <div>
                            <p className="grTxtL">Номер телефону</p>
                            <p>{user.phoneNumb}</p>
                        </div>
                        <div>
                            <p className="grTxtL">Електронна пошта</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    
                </div>

             {/*<div className="userDocumCont">
                    <p className="washDocTxt">Ваші документи</p>
                    <div className="userDocuments">
                        
                        <div className="userDocument">
                            <div className="imgOfDocumCont">
                                <img src={Doc1} alt="" />
                            </div>
                            <div className="statusOfDocumCont">
                                <div><p className="grTxt">Додано</p><p>31.01.2000</p></div>
                                <div><p className="grTxt">Оновлено</p><p>47.03.2023</p></div>
                            </div>
                            <div className="updateDocumBtnCont">
                                <button>Оновити</button>
                            </div>
                        </div>
                        <hr></hr>
                    
                        <div className="userDocument">
                            <div className="imgOfDocumCont">
                                <img src={Doc1}  alt="" />
                            </div>
                            <div className="statusOfDocumCont">
                                <div><p className="grTxt">Додано</p><p>31.01.2000</p></div>
                                <div><p className="grTxt">Оновлено</p><p>47.03.2023</p></div>
                            </div>
                            <div className="updateDocumBtnCont">
                                <button>Оновити</button>
                            </div>
                        </div>
                        
                    </div>
                   
                    <div className="addDocumenBtnCont">
                        <button>Додати документ</button>
                    </div>
                </div>*/}             
            </div>}
            
            
        </div>
        <FooterHome></FooterHome>
        </>
    )
}