import { use, useState } from "react";



export default  function  Testing() {
   const [count, setCount] = useState(0);
   //coconut,banana,apple,other
 const [itenName, setItenName] =  useState("coconut")
  
  
  
  
  
   return (
        <div className="w-full  bg-amber-500 flex flex-col justify-center items-center h-screen">
            <h1 className="text-9xl ">{count}{itenName}s</h1>
            <button className="w-[100px] h-[60px] bg-black text-3xl text-amber-50 rounded-lg" onClick=
            {() => { 
               const newCount = count + 1
                setCount (newCount)
                 
                  }}
                  >count </button>
                  <div className="w-full  flex justify-evenly items-center p-4" >
  <button className="w-[100px] h-[60px] bg-black text-3x2 text-amber-50 rounded-lg"onClick={() => setItenName("Coconut")} >Cocount</button>
  <button className="w-[100px] h-[60px] bg-black text-3x2 text-amber-50 rounded-lg" onClick={() => setItenName("Banana")}>Banana</button>
  <button className="w-[100px] h-[60px] bg-black text-3x2 text-amber-50 rounded-lg" onClick={() => setItenName("Apple")}>Apple</button>
  <button className="w-[100px] h-[60px] bg-black text-3x2 text-amber-50 rounded-lg" onClick={() => setItenName("Other")}>Other</button>



                  </div>
       
        </div>

        
    );
}