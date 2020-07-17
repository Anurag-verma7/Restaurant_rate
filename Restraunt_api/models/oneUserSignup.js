const mongoose = require('mongoose');
const schema = mongoose.Schema;

const signUpSchema = new schema({
    firstname : {
        type : String ,
        require : true
    },
    lastname : {
        type : String ,
        require : true
    },
    email : {
        type : String ,
        require : true
    },
    password : {
        type : String ,
        require : true
    }

});

const newUser = mongoose.model('user',signUpSchema);

module.exports = newUser;