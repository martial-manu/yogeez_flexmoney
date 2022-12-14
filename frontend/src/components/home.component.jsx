import { Link } from "react-router-dom";
const Home = ()=>{
   return <div>
       Home page : Yogeez
           
           <div>
             <div>
                <Link to ='/signup'>Create new user</Link>
            </div>
            <div>
                <Link to='/login'>Click to login aka fetch user info</Link>
            </div>
            <div>
               <Link to='/add-plan'>Click to add plan</Link>
            </div>
            <div>
               <Link to ='/change-timing'>Click to change timings</Link>
            </div>
            <div>
                <Link to ='/add-plan'>Add plan to the pack</Link>
            </div>
           </div>
   

    </div>
   

}

export default Home;