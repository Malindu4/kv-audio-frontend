
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import AdminPage from './pages/admin/adminpage'
import Homepage from './pages/home/homepage'
import Testing from './components/testing'


function App() {
 

  return (
    <BrowserRouter>
   
   
  <Routes path="/" >
  
    <Route path="/admin/*" element={<AdminPage/>}  />
    <Route path="/*" element={<Homepage/>}  /> 
    <Route path="/*"element={<h1>Not Found  </h1>}/>
    <Route path="/testing" element={<Testing/>}  />
  </Routes>
   
   </BrowserRouter>
  ) 
}

export default App
