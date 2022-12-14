const User = require('../models/user.models');
const plans = [
    "NO plans" , 
    "6-7 AM" , 
    "7-8 AM" ,
    "8-9 AM" , 
    "5-6 PM"
]

module.exports.return_user_info = async (req ,res)=>{
    const user_info = req.body;

    console.log(user_info);

    try{
      const usr = await User.findOne({email : user_info.email});
      console.log(usr);
      res.send(usr);
      return ;
    }
    catch(err){
      res.send(err); return ;
    }
}

// Once the user is logged in, i want to send more data 
module.exports.addPlan = async(req ,res)=>{
    const user_details = req.body; 
  console.log("create-user route hit");
  console.log(user_details);
 
  try{
    const usr = await User.findOne({email : user_details.email});
    if(!usr){
      throw new Error("user does not exist");
    }
    user_details.months = Number(user_details.months);
    if(usr.plans_booked == 0){
      if(usr.next_plan > 0){
        usr.current_plan = usr.next_plan;
      }
      else usr.current_plan = 1;
    }
    usr.plans_booked += user_details.months;
    
    await usr.save(); return ;
  }
  catch(err){
    res.send("something wrong happened"); return ;
  }
}

module.exports.create_user = async (req , res)=>{
  const user_details = req.body; 
  console.log("create-user route hit");
  console.log(user_details);
  user_details.age = Number(user_details.age);
  // res.send('done'); return ;

  try{
    const usr = await User.findOne({email : user_details.email});
     console.log(usr);
    if(usr){
      throw new Error("boi");
    }
  } 
  catch(err){
    console.log(err);
    res.status(500).send("not valid"); return ;
  }

  try{
    await User.create(user_details);
  }
  catch(err){
    console.log(err);
  }

  res.send('done creating the user'); return ;
}


module.exports.postChangeTiming = async(req ,res)=>{
  const user_details = req.body; 
  console.log("create-user route hit");
  console.log(user_details);
 
  try{
    const usr = await User.findOne({email : user_details.email});
    if(!usr){
      throw new Error("user does not exist");
    }

    usr.next_plan = user_details.next_plan;
    await usr.save(); 
    return ;
  }
  catch(err){
    console.log(err); 
    return res.send(err); 
  }
}