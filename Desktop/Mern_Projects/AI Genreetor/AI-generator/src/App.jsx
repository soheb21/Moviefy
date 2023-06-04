import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationAndLogin from './pages/RegistrationAndLogin';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import ScifiImg from './pages/ScifiImg';
import JsConvertor from './pages/JsConvertor';
import ChatBot from './pages/ChatBot';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegistrationAndLogin />} />
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/paragraph' element={<Paragraph />} />
          <Route path='/scifiImg' element={<ScifiImg />} />
          <Route path='/js-convertor' element={<JsConvertor />} />
          <Route path='/chatBot' element={<ChatBot />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
