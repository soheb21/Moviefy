import { message } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const logoutHandler = async () => {
        try {
            setIsLoggedIn(false)
            localStorage.clear();
            message.success("Logout Successfully")
        } catch (error) {
            console.log(error);
            message.error("Logout Failed")
        }
    }
    return (
        <>
            <div className="h-16 py-10 grid place-content-center place-items-center shadow-md bg-slate-600 ">
                <div className="text-2xl text-white font-semibold"><Link className="hover:text-slate-400" to={"/homepage"}>AI Generator</Link></div>
                <div className="flex gap-3 text-slate-300 ">
                    {isLoggedIn ? (<>

                        <Link onClick={logoutHandler} className="hover:text-white" to={"/"}>Logout</Link>
                    </>) : (<>
                        <Link className="hover:text-white" to={"/register"}>Sign up</Link>
                        <Link className="hover:text-white" to={"/"}>Sign In</Link>
                    </>)}
                </div>
            </div>
        </>
    )
}

export default Navbar