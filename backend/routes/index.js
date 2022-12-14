const express = require('express');

const router = express.Router();

const plans = [
    "NO plans" , 
    "6-7 AM" , 
    "7-8 AM" ,
    "8-9 AM" , 
    "5-6 PM"
]

const {addPlan , return_user_info , create_user, postChangeTiming} = require('../controllers/controllers.js');

router.post('/login' , return_user_info);
 
router.get('/add-plan' , addPlan);

router.post('/create-user' , create_user);

router.post('/add-plan' , addPlan);

// router.get('/change-timing' , getCchangeTiming);

router.post('/change-timing' , postChangeTiming);

module.exports = router;