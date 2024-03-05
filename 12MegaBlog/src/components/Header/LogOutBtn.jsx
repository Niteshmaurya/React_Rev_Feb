import React from 'react'
import    {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from '../../Store/authSlice'

function LogOutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button 
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        LogOut

    </button>
  )
}

export default LogOutBtn