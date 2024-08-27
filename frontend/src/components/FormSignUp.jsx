import React from "react";
import googleLogo from '../assets/imgs/googlelogo.svg'
function FormSignUp(){
    return(
        <div className="formcard  px-10 py-10 rounded-3xl border-2 border-gray-200">
            <h1 className="text-4xl font-semibold ">Welcome to Medicare</h1>
            <p className="font-medium text-lg text-gray-500 flex justify-center items-center mt-4">Please enter your details.</p>
            <div className="mt-6">
                <div>
                    <label className="text-lg font-medium">Full Name</label>
                    <input className="w-full border-2 border-gray-400 rounded-xl p-3 " type="text" placeholder="Enter Full Name" />
                </div>
                <div>
                    <label className="text-lg font-medium">Email</label>
                    <input className="w-full border-2 border-gray-400 rounded-xl p-3 " type="email" placeholder="Enter Email" />
                </div>
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input className="w-full border-2 border-gray-400 rounded-xl p-3 " type="password" placeholder="Enter Password" />
                </div>
                <div>
                    <label className="text-lg font-medium">Confirm Password</label>
                    <input className="w-full border-2 border-gray-400 rounded-xl p-3 " type="password" placeholder="Re-enter Password" />
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <input className="" type="checkbox" id='remember' />
                        <label className="ml-2 font-medium text-base" for='remember'>Remember me</label>
                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button type="submit" className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-3xl bg-violet-500 text-white text-lg font-bold ">Create your Account</button>
                    <button className="flex py-3 border-2 rounded-3xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex items-center justify-center gap-2"> 
                        <img size={24} src={googleLogo} alt="GLogo" />
                        Sign up with Google
                    </button>
                </div>
                <div className="mt-8 flex justify-center items-center"> 
                    <p className="font-medium text-base"> Already have an account?</p>
                    <button onClick={'./Login.jsx'} className="text-blue-700 text-base font-medium ml-2" > Sign In</button>
                </div>
            </div>
        </div>
    );
} 

export default FormSignUp;