const express = require('express');
const {check} = require('express-validator');
const Auser = require('../models/oneUserSignup');


exports.loginValid = [
    check('email').isEmail().withMessage('enter valid email'),
    check('email').custom(val => {
        return Auser.findOne({email :  val}).then(user => {
            if(user == null){
                return Promise.reject("email not in database");
            }
        }).catch(err=>{
            console.log(err);
        })
    }),
];