const postUser = async(request,response)=>{
    console.log(`Input Received: ${JSON.stringify(request.body)}`);
    try {
       
        return response.status(201).json({message:"user is added to records"});

    } catch (error) {
        return response.status(500).json({message:"error occured !!"});
    }
    
}
const getUsers = async(request,response)=>{
    try {

        response.status(201).json({message:"all users from records"});
    }
    catch(err)
    {
        response.status(500).json({message:"error occured !!"});
    }
}
const getUserById = async(request,response)=>{
    try {

        response.status(201).json({message:"individual user from records"});
    }
    catch(err)
    {
        response.status(500).json({message:"error occured !!"});
    }
}
const updateUserById = async(request,response)=>{
    try {

        response.status(201).json({message:"updated individual user from records"});
    }
    catch(err)
    {
        response.status(500).json({message:"error occured !!"});
    }
}
const deleteUserById = async(request,response)=>{
    try {

        response.status(201).json({message:"deleted individual user from records"});
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