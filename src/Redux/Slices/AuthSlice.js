import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import {toast} from "react-hot-toast";
const initialState={
    isLoggedIn:localStorage.getItem("isLoggedIn") || false,
    role:localStorage.getItem("role") || "",
    data:localStorage.getItem("data") != undefined ? JSON.parse(localStorage.getItem("data")) : {}
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
export const login=createAsyncThunk("/auth/login",async (data)=>{
    try{
        const res=axiosInstance.post("user/login",data);
        toast.promise(res,{
            loading:"Wait:authenticating your account",
            success:(data)=>{
                console.log("The value of data is",data)
                return data?.data?.message
            },
            error:"Failed to login",
                
                
            
             
        })
        return (await res).data
    }
    catch(error){
        toast.error(error?.response?.data?.message)
    }
})
export const logout=createAsyncThunk("/auth/logout",async ()=>{
    try{
        const res=axiosInstance.post("user/logout")
        toast.promise(res,{
            loading:"Wait:logout in progress",
            success:(data)=>{
                return data?.data?.message
            },
            error:"Failed to logout"
        })
    }
    catch(error){
        toast.error(error?.response?.data?.message)
    }
})
export const updateProfile=createAsyncThunk("/auth/update/profile",async (data)=>{
    try{
        const res=axiosInstance.put("/user/update",data)
        toast.promise(res,{
            loading:"Wait:profile update in progress",
            success:(data)=>{
                return data?.data?.message
            },
            error:"Failed to update the profile"
        })
        return (await res).data
    }
    catch(error){
        toast.error(error?.response?.data?.message)
    }
})
export const getUserData=createAsyncThunk("/user/details",async ()=>{
    try{
        const res=axiosInstance.get("/user/me")
        return (await res).data
        
    }
    catch(error){
        toast.error(error.message)
    }
})
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.user))
            localStorage.setItem("isLoggedIn",true)
            localStorage.setItem("role",action?.payload?.user?.role)
            state.isLoggedIn=true
            state.data=action?.payload?.user
            state.role=action?.payload?.user?.role
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear()
            state.data={}
            state.isLoggedIn=false
            state.role=""
        })
        .addCase(getUserData.fulfilled,(state,action)=>{
            // if(!action?.payload?.user) return
            localStorage.setItem("data",JSON.stringify(action?.payload?.user))
            localStorage.setItem("isLoggedIn",true)
            localStorage.setItem("role",action?.payload?.user?.role)
            state.isLoggedIn=true
            state.data=action?.payload?.user
            state.role=action?.payload?.user?.role

        })
    }

})
export default authSlice.reducer