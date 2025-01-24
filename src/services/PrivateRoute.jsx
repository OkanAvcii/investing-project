import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({special}) => {
  const {isAuthenticated} = useContext(AuthContext);


  return isAuthenticated? special : <Navigate to="/"/>
}

export default PrivateRoute