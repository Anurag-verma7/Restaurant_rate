const mongoose = require('mongoose');
module.exports =  mongoose.connect("mongodb://localhost/RestrauntDB",{ useNewUrlParser: true,useUnifiedTopology: 
true },(err)=>{
    if(!err){
        console.log("connected to RestrauntDB");
    }
    else{
        console.log("unable to connect db" + err);
    }
});