import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: "Ku M Na Ja",
    user: "chanachai",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.value = "M Login";
        },
        logout: (state) => {
            state.value = "M Logout";
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {login, logout, incrementByAmount} = userSlice.actions;

export default userSlice.reducer;
