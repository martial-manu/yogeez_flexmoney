import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import plans from "../plans";
const Login = ()=>{
   const [email , setEmail] = useState("");
   const [password , setPassword] = useState("");
   const [data , setData ] = useState("");
   async function onSubmitHandler(e){
      e.preventDefault();
      console.log(email , password);

      // send the data to the backend   
      try{  
         let res = await axios({
            method : 'POST' , 
            url : 'http://localhost:4001/user/login' , 
            data :{
               email: email ,                 
               password : password , 
            }

         });
         // console.log(res);
         
         setData(res.data);
         console.log(res);
      }
      catch(err){
         console.log(err);
      }       
   }
   return (<>
   <p>Login form for users</p>
   <form onSubmit = {onSubmitHandler}>
      <div>
      <label>Enter Email address</label>
      <input type = "text" placeholder="Enter email" name="email" value={email} required onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div>
      <label>Enter password</label>
      <input type = "password" placeholder="Enter password" name="password" value={password} required onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <button>Submit</button>
   </form>

   {
      data!="" ? 
      <div>
         <p>name : {data.name}</p>
         <p>age : {data.age}</p>
         <p>current timing : {plans[data.current_plan]}</p>
         <p>preferred timing : {plans[data.next_plan]}</p>
      </div>
      :<></>
   }

   <Link to ='/'>Back to home</Link>


   </>)
}



export default Login;