import axios from "axios";
import"./loain.css"
import { useState } from "react";
import toast from "react-hot-toast";

export default   function Loginpage() {
   const[email, setEmail] = useState("");
   const[password, setPassword] = useState("");
   function handleOnSubmit(e
    ){
    e.preventDefault();//website එක  සකස්වීම  පෙන්නන එක නතර වෙනවා

    console.log(email, password)
   
    axios.post("http://localhost:3000/api/users/login", 
        {email : email,
        password : password
      }
      ).then((res) => {
        console.log(res);

    toast.success("Login Success")

      }).catch((err) => {
        console.log(err.response.data.error);
      });
     
}
       
   
   
    return (
        <div className=" bg-picture w-full h-screen flex justify-center items-center" >
           <form onSubmit={handleOnSubmit}>
           
            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-lg-2xl flex justify-center items-center flex-col reletive">
               
               
                <img src="/logo.png" alt="logo" className="w-[100px] h-[100px]  absolute top-1" />
                 
                <input type="email" placeholder="Email" className="w-[300px] h-[50px] rounded-lg border-b-2w-[300px]  m-2 p-2 bg-black text-white font-bold" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} />
                 <input type="password" placeholder="Password" className="w-[300px] h-[50px] rounded-lg border-b-2w-[300px]  m-2 p-2 bg-black text-white font-bold"
                    value={password}
                 onChange={(e) => setPassword(e.target.value)} />
                  <button className="w-[300px] h-[50px] rounded-lg border-b-2w-[300px]  m-2 p-2 bg-black text-white font-bold" >Login</button>
            </div>
             </form>
        </div>
    );
}


