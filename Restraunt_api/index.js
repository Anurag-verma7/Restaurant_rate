require('./connectDb');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const loginSignUpRouter = require('./controllers/userLoginSignup');
app.use(bodyParser.json());
app.use(cors());
app.listen(5000, (err)=>{
    if(!err){
        console.log("listening at 5000");
    }
    else{
        console.log(err);
    }
});

app.use('/user',loginSignUpRouter);