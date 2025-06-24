import {  Route, Routes } from "react-router-dom"
import Header from "../../components/header"

import Gallery from "./gellero"
import Contact from "./contact"
import Home from "./home"
import Items from "./items"
import ErrorNotFound from "./error"


export default function Homepage(){
    return(
        <>
        <Header/>
      
        <div className=" h-calc(100vh-100px) w-full">
 
     <Routes path="/*" >
     
     
     
     
     <Route path="/items" element={<Items/>}/>
     <Route path="/*" element={<ErrorNotFound/>}/>
     <Route path="/" element={<Home/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/gallery" element={<Gallery/>}/>
     
     </Routes>
     
      
     
        </div>
        
        </>
        
    )
}