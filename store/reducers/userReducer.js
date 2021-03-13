import * as types from '../actions/types';

const initialState={
    isLogin:false,
    token:''
}

/** user리듀서는 이전상태, 행할 액션을 받아 액션의 타입에 따라 상태를 변환한다.
   이때 액션으로 올 수 있는 건 LOGIN_USER 와 LOGOUT_USER, REGISTER_UESR 세가지
 */
export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.LOGIN_USER:
            return {
                isLogin:true,
                token:action.payload.token
            }
        case types.LOGOUT_USER:
            return{
                isLogin:false,
                token:''
            }
        case types.RE_AUTH:
            return{
                isLogin:true,
                token:action.payload.token
            }   
        case types.ERROR:
            return {
                ...state
            }
        default:
            return state
    }
}