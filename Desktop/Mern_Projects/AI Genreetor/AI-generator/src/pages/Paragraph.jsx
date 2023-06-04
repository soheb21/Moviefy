import { message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layouts from '../components/Layouts'

const Paragraph = () => {
  const [text, setText] = useState("")
  const [paragraph, setParagraph] = useState("")
  const handler = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/openai/paragraph", { text }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      setParagraph(data)
    } catch (error) {
      message.error("Something went wrong!!")
      console.log(error)
    }
  }

  return (
    <Layouts>
      <div className="flex flex-col h-full w-full gap-1 p-4">
        <div className="w-full ">
          <div className="flex justify-between px-2 my-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium  text-white ">Word</label>
            <button className='bg-slate-800 text-white rounded-md px-2 hover:bg-slate-400 ' onClick={handler}>Generate</button>
            <Link to={"/homepage"}>{"<- Go back"}</Link>
          </div>

          <input value={text} onChange={(e) => setText(e.target.value)} className="block p-2.5 w-full text-sm  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your text"></input>

        </div>
        <div className="h-full w-full ">
          <label htmlFor="message" className="block mb-2 text-sm font-medium  text-center text-white ">Detail Paragraph</label>
          {paragraph ? (
            <div className="w-full overflow-y-auto p-2 h-[50%] md:h-[74vh] border-2 border-slate-400 grid place-content-center bg-slate-800 text-white rounded-md">
              {paragraph}
            </div>
          ) : (
            <div className="w-full overflow-y-auto p-2 h-[50%] md:h-[60vh] border-2 border-slate-400 grid place-content-center bg-slate-800 text-white rounded-md">
              paragraph will appear here
            </div>
          )}
        </div>
      </div>
    </Layouts>
  )
}

export default Paragraph