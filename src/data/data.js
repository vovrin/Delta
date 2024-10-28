import { createSlice, configureStore } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "./firabase";
const userInfo = {
    name:null,
    surName:null,
    middleName:null,
    email:null,
    phoneNumb:null,
    dateOfBirth:null,
    uid:null,
    profPict:null
}
const counterSlice = createSlice({
    name:'user',
    initialState:userInfo,
    reducers:{
        setUserGlobInf(state, action){
            state.name = action.payload.name;
            state.surName = action.payload.surName;
            state.middleName = action.payload.middleName;
            state.phoneNumb = action.payload.phoneNumb;
            state.dateOfBirth = action.payload.dateOfBirth;
        },
        setUser(state, action){
            state.email = action.payload.email;
            state.uid = action.payload.uid;
        },
        setProfPic(state, action){
            state.profPict = action.payload.profPict;
        }
    }
});
export const contSlice = counterSlice.actions;

export const store = configureStore({
    reducer: {user: counterSlice.reducer}
})