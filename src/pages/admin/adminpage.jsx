import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { Route, Routes, Link } from "react-router-dom";
import AdminItemsPage from "./adminltemsPage";

export default function AdminPage(){
    return( 
        <div className="w-full h-screen flex">
            <div className="w-[200px] h-full bg-green-200">
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
                    <BsGraphDown/>
                    Dashboard
                </button>
                 <Link to="/admin/bookings" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
                    <FaRegBookmark/>
                    Booking
                </Link>
                <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
                    <MdOutlineSpeaker/>
                    Items
                </Link>
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
                    <FaRegUser/>
                    User
                </button>
            </div>
            <div className="w-[calc(100vw-200px)]bg-blue-900 ">
                <Routes path="/*">
                    <Route path="/bookings/*" element={<h1>Booking</h1>}/>
                    <Route path="/items" element={<AdminItemsPage/>}/>
                    
                </Routes>
            </div>
        </div> 
    )
}