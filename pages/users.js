import {useState, useEffect} from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default function users(){
    const [users,setUsers]=useState([]);
    const [ready,setReady]=useState(false);
    let number=1;

    useEffect(()=>{
       axios.get('/api/users',{
           headers:{
               token:localStorage.getItem('token'),
           }
       }).then(res=>{
           if(res.data.success===true){
            setReady(true);
            setUsers(res.data.users);
           }else if(res.data.success===false){
               alert('인증오류');
           }
       })
    },[]);

    return(
        <div style={{margin:20}}>
            {ready?((
                <>
                             <Table celled>
                             <Table.Header>
                               <Table.Row>
                                 <Table.HeaderCell>-</Table.HeaderCell>
                                 <Table.HeaderCell>Name</Table.HeaderCell>
                                 <Table.HeaderCell>Email</Table.HeaderCell>
                                 <Table.HeaderCell>Since</Table.HeaderCell>
                               </Table.Row>
                             </Table.Header>
                         
                             <Table.Body> 
                               {users.map(user=>(
                                   <Table.Row key={user.email}>
                                       <Table.Cell>{number++}</Table.Cell>
                                       <Table.Cell>{user.name}</Table.Cell>
                                       <Table.Cell>{user.email}</Table.Cell>
                                       <Table.Cell>{user.since}</Table.Cell>
                                   </Table.Row>
                               ))}
                             </Table.Body>
                           </Table>
                           </>
            )):((<>Loading...</>))}
 
        </div>
    );
}

