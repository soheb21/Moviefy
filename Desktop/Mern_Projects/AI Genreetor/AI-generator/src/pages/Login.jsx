import React, { useState } from 'react'
import { message } from "antd"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import Layouts from '../components/Layouts';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handlerInput = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/v1/user/login", { email, password })
            if (res.data.success) {
                localStorage.setItem("token", res.data.token)
                message.success("Login SuccessfUlly")
                navigate("/homepage")
            } else {
                message.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            message.error("Login Failed")
        }

    }
    return (
        <Layouts>
            <div className="flex items-center justify-center h-screen mt-[-2rem]" >
                <div className="bg-gray-800 flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                    <div className="text-white mt-10">
                        <h1 className="font-bold text-4xl">Login</h1>
                    </div>
                    <form onSubmit={handlerInput} className="flex flex-col space-y-8 mt-10">
                        <input type="email" name='email' onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Enter your email" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" />
                        <input type="password" name='password' onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Enter your password" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" />
                        <button type='submit' className="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold">Submit</button>
                        <Link to={"/register"}>create an account</Link>
                    </form>
                </div>
            </div>
        </Layouts>
    )
}

export default Login