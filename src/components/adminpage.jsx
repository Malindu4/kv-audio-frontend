

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
            <div className="w-[calc(100vw-200px)] ">
                <Routes path="/*">
                    <Route path="/bookings/*" element={<h1>Booking</h1>}/>
                    <Route path="/items" element={<AdminItemsPage/>}/>
                    <Route path="/items/add" element={<ProductAddingPage/>}/>
                    <Route path="/items/edit/" element={<UpdateItemspage/>}/>
                </Routes>
            </div>
        </div>
    )
}