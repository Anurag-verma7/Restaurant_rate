const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const{validationResult} = require('express-validator');
const {signupValid} = require('../validators/signUpValidator')
const NewUser = require('../models/oneUserSignup');
const {loginValid}  = require('../validators/loginValidator');
router.use(cors());

router.post('/signup',signupValid,(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
        return res.status(422).json({ errors: errors.array() });
    }
    else{
            let User = new NewUser({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                password : req.body.password
            });
            User.save(User,(err,docs)=>{
                if(!err){
                    console.log("user saved")
                    res.send(docs);
                }
                else{
                    console.log(err);
                }
            });
        }
});

router.post('/login',loginValid,(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    else{
        NewUser.findOne({$and : [{email : req.body.email}, {password : req.body.password}]},(err, docs)=>{
            if(docs == null){
                console.log("password incorrect");
                res.status(422).send('account not found ');
            }
            else{
                console.log("login successful :)")
                res.send(docs);
            }
        }) 
    }
});

module.exports = router;