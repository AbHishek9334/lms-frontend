import {toast} from "react-hot-toast"
import HomeLayouts from "../Layouts/HomeLayouts"
import { useState } from "react"
import { isEmail, isValidPassword } from "../Helpers/regexMatcher"

function Contact(){
    const [userInput,setUserInput]=useState({
        name:"",
        email:"",
        message:""
    })
    function handleInputChange(e){
        const {name,value}=e.target
        setUserInput({
            ...userInput,[name]:value
        })
    }
    async function onFormSubmit(e){
        e.preventDefault()
        console.log("The value of the userInput is",userInput)
        if(!userInput.email || !userInput.name || !userInput.message){
            toast.error("All fields are mandatory")
        }
    
    //checking valid email
    if(!isEmail(userInput.email)){
        toast.error("invalid email id")
        return
    }
    //checking password
    if(!isValidPassword(userInput.password)){
        toast.error("password must have 6-16 character long with atleast a number and a special character")
        return
    }
}
    return(
        <HomeLayouts>

           <div className="flex items-center justify-center h-[100vh]">
                <form noValidate onSubmit={onFormSubmit} className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">
                        <h1 className="text-3xl font-semibold">Contact Form</h1>
                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="name" className="text-xl font-semibold">
                                Name
                            </label>
                            <input onChange={handleInputChange} className="bg-transparent border px-2 py-1 rounded-sm" id="name" type="text" name="name" placeholder="Enter your name"/>
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="email" className="text-xl font-semibold">
                                Email
                            </label>
                            <input onChange={handleInputChange} className="bg-transparent border px-2 py-1 rounded-sm" id="email" type="email" name="email" placeholder="Enter your email"/>
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="message" className="text-xl font-semibold ">
                                Message
                            </label>
                            <textarea onChange={handleInputChange} className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40" id="message"   name="message" placeholder="Enter your message"/>
                        </div>
                        <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-sm text-lg cursor-pointer">
                            Submit
                        </button>
                </form>

           </div>
         
        
        </HomeLayouts>
    )

}
export default Contact