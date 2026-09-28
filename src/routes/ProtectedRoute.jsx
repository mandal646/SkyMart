import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/Authcontext';

const ProtectedRoute = () => {
    const{LoggedInUser} = useContext(Auth);

    if(!LoggedInUser){
        return <Navigate to={"/"}/>;
    }
  return (
    <Outlet/>
  )
}

export default ProtectedRoute