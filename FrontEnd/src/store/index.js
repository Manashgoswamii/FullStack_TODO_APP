import{configureStore, createSlice} from "@reduxjs/toolkit";
const authSlice = createSlice({
    name:'auth',
    initialState:{ user:"",isLoggedIn:false},
    reducers: {
        login(state){
            state.isLoggedIn = true;
            // dispatch(authActions.login());
        },
        logout(state){
            state.isLoggedIn = false;
            // dispatch(authActions.logout());
        },
    },
});

export const authActions=authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer,  // register reducers
});