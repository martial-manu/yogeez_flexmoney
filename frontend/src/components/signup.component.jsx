import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SignUp = ()=>{
   const [warning , setWarning] = useState(0);
   const [email , setEmail] = useState("");
   const [password , setPassword] = useState("");
   const [age , setAge] = useState(0);
   const [name , setName] = useState("");
   const onChangeHandler = (e)=>{
      e.preventDefault();
    //   console.log(e.target.value);
      setWarning(0);
      const curr_pass = e.target.value;
      if(curr_pass.length < 8)setWarning(1);
    //   console.log("war" , warning);
      setPassword(e.target.value);
   }
   async function onSubmitHandler(e){
      e.preventDefault();

      console.log(email , password , age , name);

      // send the data to the backend
      try{
         
         let res = await axios({
            method : 'POST' , 
            url : 'http://localhost:4001/user/create-user' , 
            data :{
               email: email , 
               name : name , 
               password : password , 
               age : age
            }
         });
         console.log(res);
      }
      catch(err){
         console.log(err);
      }
   }
   return <>

   <p>Sign Up form for new users</p>
   <form onSubmit={onSubmitHandler}>
      
    <div>
      <label>Enter email address </label>
      <input type="text" placeholder="Enter email address" name="email" value = {email} onChange={(e)=>setEmail(e.target.value)} required></input>
    </div>
    <div>
      <label>Enter Name </label>
      <input type="text" placeholder="Enter Name" name="name" value = {name} onChange={(e)=>setName(e.target.value)} required></input>
    </div>
    <div> 
    <label>Enter password</label>
    <input type = "password" placeholder="Enter password" name="password" value = {password} required onChange={onChangeHandler}></input>
    
    {warning ? <div >password too weak</div>:<></>}  
    </div>
    <div>
    <label>Enter age</label>
    <input type = "number" placeholder="Enter age" min="18" max="65" name="age" value={age} onChange={(e)=>setAge(e.target.value)} required></input>
    </div>
    <button>Submit</button>
   </form>
   <Link to ='/'>Back to home</Link>
   </>
}
export default SignUp;