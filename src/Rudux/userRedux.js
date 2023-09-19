import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentState:null,
    isFetching:false,
    error:false
  },

  reducers: {
    loginStart:(state)=>{
        state.isFetching=true
    },
    loginSuccess:(state,action)=>{
        state.isFetching=false;
        state.currentState=action.payload
        state.error=false;
    },
    loginFail:(state)=>{
       state.isFetching=false;
       state.error=true
    }
  },
});

export const { loginFail,loginStart,loginSuccess } = userSlice.actions; // Corrected 'actions' property
export default userSlice.reducer; // Corrected 'reducer' property
