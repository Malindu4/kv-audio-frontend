import { Link } from "react-router-dom";

export  default function Header(){
    {/* relative header*/}
    return(<header className="w-full h-[100px] shadow-x1 flex justify-center items-center items-center relative">
      
      {/*absolute logo*/}
      
      <img  src="/logo.jpg"ait ="logo" className="w-[100px] h-[100px] oject-cover border -[3px] absolute left-1" />
        
        
        
        <Link to="/" className="text-[20px] font-bold m-1">
            Home
        </Link>
        <Link to="/contact" className="text-[20px] font-bold m-1">
            Contact
        </Link>
          {/*gallery*/}
          <Link to="/gallery" className="text-[20px] font-bold m-1">
           Gallery
        </Link>
        {/*items*/}
        <Link to="/items" className="text-[20px] font-bold m-1 ">
           Items
        </Link>
        
       
    </header>)
}