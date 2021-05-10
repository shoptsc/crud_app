const User = require("../models/User");

exports.sendData = async(req, res) =>{
    const {name, email, country} = req.body;
    const newUser = new User({
        name, email, country
    })
    try{
        const createdUser = await newUser.save();
        if(createdUser) return res.status(200).json({
            message : "User created successfully",
            data : createdUser
        })
    }catch(error){
        res.status(400).json(
            {message : error.message}
        )
    }

}


exports.getData = async(req, res) =>{
    try{
        const fetchData = await User.find({});
        if(fetchData) return res.status(200).json(
            fetchData
        )
    }catch(error){
        res.status(400).json(
            {message : error.message}
        )
    }
}


exports.updateData = async(req, res) =>{
    const {name, email, country} = req.body;
    datas = {
        name, email, country
    }
    try{
     const updateUser = await User.findByIdAndUpdate({_id: req.params.id}, datas, {useFindAndModify: false});
     if(updateUser) return res.status(200).json("Data Updated Successfully")
    }catch(error){
        res.status(400).json(error.message)
    }
 }


exports.deleteData = async (req, res) =>{
    try{
        const removeData = await User.findByIdAndDelete({_id: req.params.id},{useFindAndModify: false})
        if(removeData) return res.status(200).json({
            message : "Data Deleted successfully",
        })
        
    }catch(error){
        res.status(400).json(
            {message : error.message}
        )
    }
}

