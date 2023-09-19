import axios from 'axios';
import {loginFail,loginStart,loginSuccess} from '../Rudux/userRedux'

export const loginApi=async (dispatch,user)=>{
     dispatch(loginStart());
     try{
        const userData=await axios.post("https://shopping-tau-seven.vercel.app/auth/login",user);
        dispatch(loginSuccess(userData.data))
     }catch(err){
        dispatch(loginFail());
        console.log(err);
     }
}


export const registerApi=async (dispatch,user)=>{
   console.log("In register ")
   dispatch(loginStart());
   try{
      const userData=await axios.post("https://shopping-tau-seven.vercel.app/auth/register",user);
      dispatch(loginSuccess(userData.data))
      console.log("In register try ")
   }catch(err){
      dispatch(loginFail());
      console.log(err);
   }
}