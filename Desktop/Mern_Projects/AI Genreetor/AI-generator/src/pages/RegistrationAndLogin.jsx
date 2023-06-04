import React, { useState } from 'react'
import { message } from "antd"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import Layouts from '../components/Layouts';

const RegistrationAndLogin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handlerInput = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/v1/user/register", { name, email, password })
            if (res.data.success) {
                message.success("Register SuccessfUlly")
                navigate("/")
            } else {
                message.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            message.error("Registration Failed")
        }

    }

    return (
        <Layouts>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-gray-800 flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                    <div className="text-white mt-10">
                        <h1 className="font-bold text-4xl">Welcome</h1>
                        <p className="font-semibold">Let's create your account!</p>
                    </div>
                    <form onSubmit={handlerInput} className="flex flex-col space-y-8 mt-10">
                        <input type="text" name='name' onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Enter your name" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" />
                        <input type="email" name='email' onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Enter your email" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" />
                        <input type="password" name='password' onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Enter your password" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" />
                        <button type='submit' className="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold">Submit</button>
                        <Link to={"/"}>Already have an account?</Link>
                    </form>
                </div>
            </div>


        </Layouts>
    )
}

export default RegistrationAndLogin