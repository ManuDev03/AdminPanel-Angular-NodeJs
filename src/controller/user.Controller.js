const User = require('../models/user.Models')
const bcrypt = require('bcryptjs')
const postUser = async(request,response)=>{
    console.log(`Input Received: ${JSON.stringify(request.body)}`);
    const user = new User({
        name: request.body.name,
        email: request.body.email,
        passwordHash: bcrypt.hashSync(request.body.password),
        phone: request.body.phone,
        isAdmin: request.body.isAdmin,
        apartment: request.body.apartment,
        zipcode: request.body.zipcode,
        street: request.body.street,
        city: request.body.city,
        country: request.body.country,
    })
    try {
        await user.save()
        return response.status(201).json(user);

    } catch (error) {
        return response.status(500).json(error);
    }
    
}
const getUsers = async(request,response)=>{

    try {
        const user = await User.find().select('-passwordHash')
        response.status(201).json(user);
    }
    catch(error)
    {
        response.status(500).json(error);
    }
}
const getUserById = async(request,response)=>{
    try {
        const user = await User.findById(request.params.userId).select('-passwordHash')
        response.status(201).json(user);
    }
    catch(err)
    {
        response.status(500).json({message:"error occured !!"});
    }
}
const updateUserById = async(request,response)=>{
    try {
        const user = await User.findByIdAndUpdate(request.params.userId,request.body,{new:true})
        response.status(201).json(user);
    }
    catch(err)
    {
        response.status(500).json({message:"error occured !!"});
    }
}
const deleteUserById = async(request,response)=>{
    try {

        const user = await User.findByIdAndDelete(request.params.userId)
        response.status(201).json(user);
    }
    catch(err)
    {
        response.status(500).json({message:"error occured !!"});
    }
}


module.exports = {
    postUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
  };