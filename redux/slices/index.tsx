import { combineReducers } from "@reduxjs/toolkit";
import { RESET_STATE } from "../types/actionType";
import UserSlice from "./UserSlice"


const MainReducer = combineReducers({
    user:UserSlice
})

export const rootReducer = (state:any,action:any) => {
    if(action.type == RESET_STATE){
        state = undefined
    }
    return MainReducer(state,action)
}