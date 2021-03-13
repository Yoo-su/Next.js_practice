import {useRouter} from 'next/router';
import {useState} from 'react'
import { Button, Form } from 'semantic-ui-react';
import styles from '../styles/sign.module.css'
import axios from 'axios';

const FormExampleForm = () => {
   const router=useRouter();

   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

   function handleName(e){
     setName(e.target.value);
   }

  function handleEmail(e){
      setEmail(e.target.value);
  }

  function handlePassword(e){
      setPassword(e.target.value);
  }
 return(
     <div className={styles.signPage}>
      <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' onChange={handleName} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' onChange={handleEmail} />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password'  onChange={handlePassword} />
    </Form.Field>
    <Button type='submit' onClick={()=>{
         axios.post('/api/signup',{
          name:name,
           email:email,
           password:password
         }).then(res=>{
           if(res.data.success===true){
                alert('회원가입이 완료되었습니다!');
                router.push('/');
           }
         })
    }}>Submit</Button>
  </Form>
     </div>
 );
}

export default FormExampleForm