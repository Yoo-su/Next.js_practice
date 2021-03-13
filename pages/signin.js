import {useRouter} from "next/router";
import {useState} from "react";
import {Button} from 'react-bootstrap';
import axios from 'axios';
import { loginUser } from '../store/actions/userActions';
import {useDispatch,useSelector} from 'react-redux';
import styles from '../styles/sign.module.css';

export default function Signin(){
    const router=useRouter();
    const dispatch=useDispatch();
    const [inputEmail,setEmail]=useState('');
    const [inputPassWord,setPassWord]=useState('');

    function handleEmail(e){
      setEmail(e.target.value);
    }

    function handlePW(e){
       setPassWord(e.target.value);
    }
    return (
            <div className={styles.signPage}>
                <div id="head">
                    <b>Login</b>
                </div>
                <div id="loginContent">
            <form>
                

                <div className="form-group" style={{marginBottom:"25px"}}>
           
                    <input type="email" className="form-control" placeholder="Email .." onChange={handleEmail}/>
                </div>
               
                <div className="form-group" style={{marginBottom:"25px"}}>
                 
                    <input type="password" className="form-control" placeholder="Password .." onChange={handlePW}/>
                </div>

                <Button style={{width:"100%",backgroundColor:"#CC9966",borderColor:"#CC9966"}} onClick={()=>{
                    const dataToSubmit={
                        email:inputEmail,
                        password:inputPassWord
                    }
                    dispatch(loginUser(dataToSubmit)).then(res=>{
                       if(res.payload.success===true){
                           localStorage.setItem('token',res.payload.token);
                           alert('로그인 되었습니다 :)');
                           router.push('/');
                       }else{
                           alert('입력 정보를 확인해주세요');
                       }
                    });
                    

                }}>Submit</Button><br></br>
            </form>
            </div>
            </div>
    );
}