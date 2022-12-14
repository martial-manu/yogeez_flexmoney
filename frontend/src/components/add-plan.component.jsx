import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
const AddPlan = ()=>{
   const [email , setEmail] = useState("");
   const [months , setMonths] = useState("");
 
   async function onSubmitHandler(e){
      e.preventDefault();

      // send the data to the backend   
      try{  
         let res = await axios({
            method : 'POST' , 
            url : 'http://localhost:4001/user/add-plan' , 
            data :{
               email: email , 
               months : months                 
            }
         });
         console.log(res);
      }
      catch(err){
         console.log(err);
      }       
   }
   return <>
   <p>Add Plans to your health </p>
   
   <form onSubmit = {onSubmitHandler}>
      <div>
      <label>Enter Email address</label>
      <input type = "text" placeholder="Enter email" name="email" value={email} required onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <label>Add plans</label>
      <input type = "number" placeholder="Enter number of months to add" min="1" max="12" name="months" value={months} required onChange={(e)=>setMonths(e.target.value)}></input>
      <button>Submit</button>
   </form>

   <p>Cart Total : {months*500}</p>
   <Link to ='/'>Back to home</Link>

   </>
}

export default AddPlan ;