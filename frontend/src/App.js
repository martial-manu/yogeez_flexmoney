
import {Route, Routes} from 'react-router-dom';

import Home from './components/home.component'; 
import Login from './components/login.component';
import SignUp from './components/signup.component';
import AddPlan from './components/add-plan.component';
import ChangeTimings from './components/change-timing.component';



function App() {
  return (
    <Routes>
      <Route path = '/'  element={<Home></Home>} ></Route>
      <Route path = '/login' element={<Login></Login>}></Route>
      <Route path = '/signup' element={<SignUp></SignUp>}></Route>
      <Route path = '/add-plan' element={<AddPlan></AddPlan>}></Route>
      <Route path = '/change-timing' element = {<ChangeTimings></ChangeTimings>}></Route>
    </Routes>
  );
}

export default App;
