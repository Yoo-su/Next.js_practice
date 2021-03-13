import {useRouter} from 'next/router';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Menu} from 'semantic-ui-react';
import { logoutUser } from '../../store/actions/userActions';

export default function Gnb(){
    const [activeItem,setActiveItem]=useState('');
    const dispatch=useDispatch();
    const isLogin=useSelector(state=>state.user.isLogin);
    const router=useRouter();

    return (
        <div>
          <Menu>
        <Menu.Item
          name='users'
          active={activeItem === 'users'}
          onClick={()=>{
             router.push('/users');
             setActiveItem('users');
          }}
        >
          users
        </Menu.Item>

        <Menu.Item
          name='books'
          active={activeItem === 'books'}
          onClick={()=>{
             router.push('/books');
             setActiveItem('books');
          }}
        >
          books
        </Menu.Item>

        <Menu.Item
          name='potatoes'
          active={activeItem === 'potatoes'}
          onClick={()=>{
            setActiveItem('potatoes');
          }}
        >
          potatoes
        </Menu.Item>

        <Menu.Menu position='right'>
        {isLogin?((
          <>
          <Menu.Item
            name='logout'
            active={false}
            onClick={()=>{
              dispatch(logoutUser());
              router.push('/');
            }}
          >Logout
          </Menu.Item>
          </>
        )):((
          <>
          <Menu.Item
          name='signin'
          active={activeItem === 'signin'}
          onClick={()=>{
            router.push('/signin');
            setActiveItem('signin');
          }}
        >
          Sign In
        </Menu.Item>

        <Menu.Item
          name='signup'
          active={activeItem === 'signup'}
          onClick={()=>{
            router.push('/signup');
            setActiveItem('signup');
          }}
        >
          Sign Up
        </Menu.Item>
        </>
        ))}
          
        </Menu.Menu>
      </Menu>
        </div> 
    );
}