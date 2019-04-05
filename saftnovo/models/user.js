const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nome:{
        type:String,
        require:true
    },
    cpf:{
        type:String,
        require:true,
        unique:true
    },
    telefone:{type:Number},
    cep:{type:Number},
    numero:{type:Number},
    complemento:{type:String}
});

//const User = mongoose.model('User',UserSchema);

module.exports=mongoose.model('User',UserSchema);
