import { auth} from '../../middleware/auth';

const handler=async(req,res)=>{
    try{
       if(res.authResult===true){
           return res.status(200).json({success:true,token:req.headers.token});
       }
       res.json({success:false});

    }catch(err){
        console.log(err);
        res.json({success:false});
    }
}

export default auth(handler);