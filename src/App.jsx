
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import AdminPage from './pages/admin/adminpage'
import Homepage from './pages/home/homepage'
import Testing from './components/testing'
import Loginpage from './pages/Login/login'
import toast, { Toaster } from 'react-hot-toast'


function App() {
 const notify = () => toast("Wow so easy!");

  return (
    <BrowserRouter>
   <Toaster position="top-right"/>
  
  <Routes path="/" >
  
    <Route path="/admin/*" element={<AdminPage/>}  />
    <Route path="/*" element={<Homepage/>}  /> 
    <Route path="/*"element={<h1>Not Found  </h1>}/>
    <Route path="/testing" element={<Testing/>}  />
    <Route path="/login" element={<Loginpage/>}  />
  </Routes>
   
   </BrowserRouter>
  ) 
}

export default App
