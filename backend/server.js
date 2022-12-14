const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

require("dotenv").config();

app.get('/' , (req ,res)=>{
  // render react application 
  res.status(201).json("yogeez")
});

app.use('/user' , require('./routes/index.js'));
const PORT = process.env.PORT || 4001;
// const conn = process.env.con;

mongoose.set('strictQuery' , false);
mongoose.connect(process.env.con)
  .then((result) => {console.log('db connected');app.listen(PORT);})
  .catch((err) => console.log(err));