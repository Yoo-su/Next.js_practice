import {verify} from "jsonwebtoken";

const secret='test';

export const auth = (next) =>async(req,res)=>{
        verify(req.headers.token,secret,async function(err,decoded){
            if(!err&&decoded){
                console.log('인증 성공');
                res.authResult=true;
                return next(req,res);
            }
   
            console.log('인증 실패');
            res.authResult=false;
            return next(req,res);
        });
     
};
