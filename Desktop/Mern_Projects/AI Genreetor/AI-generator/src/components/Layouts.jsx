import React from 'react'
import Navbar from './Navbar'

const Layouts = ({ children }) => {
    return (
        <>
            <div><Navbar/></div>
            <div className='bg-gradient-to-r from-slate-800 to-blue-900 h-screen text-white p-2'>{children}</div>
        </>
    )
}

export default Layouts