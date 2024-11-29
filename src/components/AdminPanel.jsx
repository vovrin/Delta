import { getDocs } from "firebase/firestore";
import { db } from "../data/firabase";
import { collection } from "firebase/firestore";
import { useEffect } from "react";
import { tiSli } from "../data/data";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import AdminPanelPopup from "./adminPanelPopup";
import UserReqCont from "./userReqCont";
export default function AdminPanel(){
    
    const [tick, setTick] = useState({
        data:[]
    })
    
    
    useEffect(()=>{
        const getFunc =  async()=>{
            const inf = await getDocs(collection(db, "tickets"));
            
            inf.forEach((vall)=>{
                const data = vall.data()
                setTick((val)=>{
                    
                    return{
                        data:[data, ...val.data]
                    }
                })
            })
            
        }
        return getFunc()
    }, [])
    console.log(tick)
    
    
        

    
    return(
        <div className="adminPanelCont">
            <p>Запити користувачів</p>
            {tick.data.map((val)=>{
            
                return<UserReqCont val ={val}></UserReqCont>
                  
                
            })}
            
            
        </div>
    )
}