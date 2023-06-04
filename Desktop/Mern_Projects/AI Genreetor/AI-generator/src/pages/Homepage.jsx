import React from 'react'
import { Link } from 'react-router-dom'
import Layouts from '../components/Layouts'
import ai_img from "../assets/ai.png"

const Homepage = () => {
    return (
        <Layouts>
            <div className="flex flex-col md:flex-row justify-center items-center h-screen md:h-[85vh] w-full ">
                <div className="w-full md:w-1/2 h-full grid  grid-cols-2 md:grid-cols-3 place-content-center place-items-center">
                    <Link to={"/summary"}>
                        <div className="p-2 m-2 w-[10rem] md:w-[12rem] text-center rounded-md shadow-xl bg-gradient-to-r from-slate-400 to-blue-800 hover:from-slate-500 hover:to-purple-500  ">
                            <i className="fa-solid fa-file-lines text-6xl text-slate-100 "></i>
                            <h1 className='text-slate-100'> Text to summarize</h1>
                        </div>
                    </Link>
                    <Link to={"/paragraph"}>
                        <div className="p-2 m-2 w-[10rem] md:w-[12rem] text-center rounded-md shadow-xl bg-gradient-to-r from-slate-400 to-blue-800 hover:from-slate-500 hover:to-purple-500  ">
                            <i className="fa-solid fa-font text-6xl text-slate-100 "></i>
                            <h1 className='text-slate-100'>word to Paragraph</h1>
                        </div>
                    </Link>
                    <Link to={"/scifiImg"}>
                        <div className="p-2 m-2 w-[10rem] md:w-[12rem]  text-center rounded-md shadow-xl bg-gradient-to-r from-slate-400 to-blue-800 hover:from-slate-500 hover:to-purple-500  ">
                            <i className="fa-regular fa-image text-6xl text-slate-100 "></i>
                            <h1 className='text-slate-100'>Generate Image</h1>
                        </div>
                    </Link>
                    <Link to={"/js-convertor"}>
                        <div className="p-2 m-2 w-[10rem] md:w-[12rem] text-center rounded-md shadow-xl bg-gradient-to-r from-slate-400 to-blue-800 hover:from-slate-500 hover:to-purple-500  ">
                            <i className="fa-brands fa-node-js text-6xl text-slate-100 "></i>
                            <h1 className='text-slate-100'>Create JS code</h1>
                        </div>
                    </Link>
                    <Link to={"/chatBot"}>
                        <div className="p-2 m-2 w-[10rem] md:w-[12rem] text-center rounded-md shadow-xl bg-gradient-to-r from-slate-400 to-blue-800 hover:from-slate-500 hover:to-purple-500  ">
                            <i className="fa-solid fa-robot text-6xl text-slate-100 "></i>
                            <h1 className='text-slate-100'>Chat with Ai-bot</h1>
                        </div>
                    </Link>
                </div>
                <div className="w-1/2 h-full appearance-none">
                    <img src={ai_img} alt="AI-img" height={520} width={520} />
                </div>
            </div>

        </Layouts>
    )
}

export default Homepage