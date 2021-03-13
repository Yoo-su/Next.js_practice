import '../styles/globals.css'
import "semantic-ui-css/semantic.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Top from '../src/components/Top';
import {Provider,useDispatch} from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { reAuth } from '../store/actions/userActions';
import axios from 'axios';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  const dispatch=useDispatch();
  useEffect(()=>{
     if(localStorage.getItem('token')){
          dispatch(reAuth({headers:{
            token:localStorage.getItem('token'),
          }}));
    
     }
  },[]);
  return (
    <Provider store={store}>
       <div>
          <Top />
             <Component {...pageProps} />
       </div>
  </Provider>
  ); 
}

const makeStore=()=>store;
const wrapper=createWrapper(makeStore)


export default wrapper.withRedux(MyApp);
