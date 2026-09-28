import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/Authcontext';

const PublicRoute = () => {
    const{LoggedInUser} = useContext(Auth);

    if(LoggedInUser){
        return <Navigate to={"/main"}/>;
    }
  return (
    <Outlet/>
  )
}

export default PublicRoute