import axios from 'axios';
import { Types } from 'mongoose';
import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    RE_AUTH,
    ERROR
} from './types';

export function registerUser(dataToSubmit){
    const request=axios.post('/api/signup',dataToSubmit)
    .then(res=>res.data);

    return{
        type:REGISTER_USER,
        payload:request
    };
};

export const loginUser=(dataToSubmit)=> async dispatch => {
    const result = await axios.post('/api/signin',dataToSubmit);

    result.data.success===true?
    (dispatch({
        type:LOGIN_USER,
        payload:result.data
    })):(dispatch({
        type:ERROR
    }))

    return {
        payload:result.data
    }
};

export function logoutUser(){
    localStorage.removeItem('token');
  
    return {
        type:LOGOUT_USER
    }
}

export const reAuth=(dataToSubmit)=>async dispatch=>{
    const result=await axios.get('/api/check',dataToSubmit);

    result.data.success===true?(
        dispatch({
            type:RE_AUTH,
            payload:result.data
        })):(
            dispatch({
                type:ERROR
            })
        )
}