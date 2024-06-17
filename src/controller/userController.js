const User = require('../model/user');

exports.addUser = async( req, res) =>{
    try{
       const {name, email, address, age, mobile, password} = req.body;
       if(!name){
        return res.status(200).json({
            status:false,
            error:'Name is require!',
        });
        }else if(!email){
            return res.status(200).json({
            status:false,
            error:'Email is require!',
        });
        }else if(!mobile){
            return res.status(200).json({
            status:false,
            error:'mobile is require!',
        });
        }
        const addUser =new User({
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            age: age,
            password:password,
        });

        const savedUser = await addUser.save();

        if(savedUser){
             return res.status(200).json({
                status:true,
                message:'Account created.',
                data: savedUser,
             }); 
        }
        return res.status(200).json({
            status:false,
            reeor: ' Something went wrong!',
        });

    }catch(error){
        return res.status(500).json({
            status:false,
            error:error.toString(),
        });
    }
};

exports.fetchUsers = async(_req,res) => {
    try{
     const userList = await User.find();
     
     //console.log(userList);
     userList.forEach((item) =>{
        console.log(item);
     });

     if(userList.length > 0){
        return res.status(200).json({
            status : true,
            userCount: userList.length,
            data:userList
        })
     }
      return res.status(200).json({
        status : false,
        message:"no data found"
      });

    }catch(error){
        return res.status(500).json({
            status:false,
            error:error.tostring()
        });
    }
};

exports.fetchSingleUser = async(req, res) => {
    try{
        const {userId} = req.params;
        const userRecord = await User.findById({_id: userId});
        if(userRecord){
        return res.status(200).json({
            status: true,
            data: userRecord,
        }) ;  
        }
        return res.status(200).json({
            status: true,
            error: 'user not found!',
        });
    }catch(error) {
        return res.status(500).json({
            status: false,
            error: error.toString(),
        });
    }   
}