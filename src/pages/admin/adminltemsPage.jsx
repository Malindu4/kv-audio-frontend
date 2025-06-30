//cursor-pointer +

import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminItemsPage() {
    return (
        <div >
           <Link to="/admin/items/add" >
            
            
            <FaPlusCircle  className="text-[50px] absolute right-2 botton-2 hover:text-red-900 cursor-pointer"/>
        </Link>
        </div>
        
    )
}   