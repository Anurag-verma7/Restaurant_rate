const express = require('express');
const {check } = require('express-validator');
const NewUser = require('../models/oneUserSignup');

exports.signupValid = [
    check('firstname').isEmpty().withMessage('firstname should not be empty'),
    check('lastname').isEmpty().withMessage('lastname should not be empty'),
    check('email')
    .isEmail().withMessage("enter valid email!!"),
    check('email').custom(val=>{
        return NewUser.findOne({email : val}).then(user => {
            if (user) {
              return Promise.reject('E-mail already in use');
            }
          });
    }),
    check('password')
    .isLength({min : 8}).withMessage("min length violeted!"),
    check('password').custom((val,{req})=>{
        if(val != req.body.confirmpassword){
            return Promise.reject("password doesnt match");
        }
    })
    
] ;
