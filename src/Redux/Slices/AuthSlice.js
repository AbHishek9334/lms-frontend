import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import {toast} from "react-hot-toast";
const initialState={
    isLoggedIn:localStorage.getItem("isLoggedIn") || false,
    role:localStorage.getItem("role") || "",
    data:localStorage.getItem("data") || {}
}
export const createAccount=createAsyncThunk("/auth/signup",async (data)=>{
    try{
        const res=axiosInstance.post("user/register",data);
        toast.promise(res,{
            loading:"Wait:creating your account",
            success:(data)=>{
                console.log("The value of data is",data)
                return data?.data?.message
            },
            error:"Failed to create account",
                
                
            
             
        })
        return (await res).data
    }
    catch(error){
        toast.error(error?.response?.data?.message)
    }
})
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{}

})
export default authSlice.reducer