//const express = require('express');
const User = require('../models/user');

const criar=async (req,res) =>{
    try{
        const {nome,cpf,telefone,cep,numero,complemento}=req.body
        const criarUser=new User({
            nome,
            cpf,
            telefone,
            cep,
            numero,
            complemento
        })
        await criarUser.save();
        return res.status(201).json({message:"Usuario criado",criarUser})
    }catch(err){
        return res.status(401).json({message: "Fail criar user",err})
    }
} 

const acharTodos = async (req, res) => {
    try{
        const TodosUsuarios = await User.find({});
        console.log(TodosUsuarios);
        return res.status(201).json({message: "Funcionarios encontrados",TodosUsuarios})

    }catch(err){
        console.log("catchs")
        return res.status(401).json({message: "Fail achar users",err})
    }
}

const acharUm = async (req,res)=>{
    try{
        const { cpf } = req.params;
        const oneUser =await User.findOne({cpf:cpf});
        if(!oneUser){
            return res.status(401).json({message: "Usuario nao encontrado"})
        }
        return res.status(201).json({message: "Usuario encontrado",oneUser})
    }catch(err){
        return res.status(401).json({message: "Fail ao encontrar usuario"})
    }
}

const remover = async (req,res)=>{
    try{
        const {cpf}=req.params
        const removerUser = await User.findOneAndRemove({cpf:cpf})
        if(!removerUser){
            return res.status(401).json({message: "Usuario nao foi encontrado"})
        }
        return res.status(201).json({message: "Usuario foi excluido"})
    }catch(err){
        return res.status(401).json({message: "Fail excluir user"})
    }
}

const uptdUser = async (req,res)=>{
    try{
        const {cpf}=req.params
        const updat=req.body
        await User.update({cpf:cpf},{$set:updat})
        const userUpdt = await User.findOne({cpf:cpf})
        if(!UserUpdt){
            return res.status(401).json({message: "Fail encontrar user"})
        }
        return res.status(201).json({message: "usuario atualizado",userUpdt})
    }catch(err){
        return res.status(401).json({message: "Fail user"})
    }
}
module.exports = {uptdUser,acharTodos,acharUm,criar,remover};