import connectDB from '../../middleware/mongodb';
import User from '../../models/user';
import {auth} from '../../middleware/auth';

const handler=async(req,res)=>{
    try{
       if(res.authResult){

            const allUsers= await User.find({});

            res.status(200).json({success:true, users:allUsers});
       }else{
            res.json({success:false});
       }

    }catch(err){
        console.log(err);
        res.json({success:false});
    }
}

export const config = {
    api: {
      externalResolver: true,
    },
  }

export default connectDB(auth(handler));