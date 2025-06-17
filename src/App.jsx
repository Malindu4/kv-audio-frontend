
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductCard from './components/ProductCard'


function App() {
 

  return (
    <BrowserRouter>
   
   
  <Routes path="/" >
  
    <Route path="/admin" element={<Adminpage />}  />
    <Route path="/" element={<h1>Home</h1>}  /> 
  </Routes>
   
   </BrowserRouter>
  ) 
}

export default App
