import React from "react";
import { FaGoogle } from "react-icons/fa";
import googleLogo from '../assets/imgs/googlelogo.svg'
function FormSignIn(){
    return(
        <div className="formcard  px-10 py-10 rounded-3xl border-2 border-gray-200">
            <h1 className="text-5xl font-semibold">Welcome Back</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">Welcome back! Please enter your details.</p>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Email</label>
                    <input className="w-full border-2 border-gray-400 rounded-xl p-4 " type="email" placeholder="Email" />
                </div>
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input className="w-full border-2 border-gray-400 rounded-xl p-4 " type="password" placeholder="Password" />
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <input className="" type="checkbox" id='remember' />
                        <label className="ml-2 font-medium text-base" for='remember'>Remember me</label>
                    </div>
                    <button className="font-medium text-base text-blue-400">Forgot Password </button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button type="submit" className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-3xl bg-violet-500 text-white text-lg font-bold ">Sign in</button>
                    <button className="flex py-3 border-2 rounded-3xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex items-center justify-center gap-2"> 
                        <img size={24} src={googleLogo} alt="GLogo" />
                        Sign in with Google
                    </button>
                </div>
                <div className="mt-8 flex justify-center items-center"> 
                    <p className="font-medium text-base"> Don't have an account?</p>
                    <button onClick={'./Signup.jsx'} className="text-blue-400 text-base font-medium ml-2" > Sign up</button>
                </div>
            </div>
        </div>
    );
} 

export default FormSignIn;