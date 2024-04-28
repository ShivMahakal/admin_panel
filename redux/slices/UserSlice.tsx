import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userSignUp:null
}

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:({
        setUserSignUp:(state,action) => {
            state.userSignUp = action.payload
        }
    })
})

export const {setUserSignUp} = UserSlice.actions

export default UserSlice.reducer;
