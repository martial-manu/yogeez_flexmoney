import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
const ChangeTimings = ()=>{
   const [email , setEmail] = useState("");
   const [next_plan , setNext_plan] = useState("");
 
   async function onSubmitHandler(e){
      e.preventDefault();
      console.log(email);
      

      // send the data to the backend   
      try{  
         let res = await axios({
            method : 'POST' , 
            url : 'http://localhost:4001/user/change-timing' , 
            data :{
               email: email ,
               next_plan : next_plan         
            }
         });
         console.log(res);
      }
      catch(err){
         console.log(err);
      }       
   }
   return <>
   <p>Add Plan your health </p>
   
   <form onSubmit = {onSubmitHandler}>
      <div>
      <label>Enter Email address</label>
      <input type = "text" placeholder="Enter email" name="email" value={email} required onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <label>Add plans</label>
      <input type = "number" placeholder="Enter plan index" min="1" max="4" name="next_plan" value={next_plan} required onChange={(e)=>setNext_plan(e.target.value)}></input>
      <button>Submit</button>
   <Link to ='/'>Back to home</Link>

   </form>

   
   </>
}

export default ChangeTimings ;