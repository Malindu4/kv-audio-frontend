import { useState } from "react";



export default  function  Testing() {
   const [count, setCount] = useState(0);
   //coconut,banana,apple,other
  const itenName="coconut"
  
  
  
  
  
   return (
        <div className="w-full  bg-amber-500 flex flex-col justify-center items-center h-screen">
            <h1 className="text-9xl ">{count}</h1>
            <button className="w-[100px] h-[60px] bg-black text-3xl text-amber-50 rounded-lg" onClick=
            {() => { 
               const newCount = count + 1
                setCount(newCount)
                 
                  }}
                  >count </button>
       
        </div>
    );
}