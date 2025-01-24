import React, { useContext, useEffect, useState } from 'react'
import Logo from '../assets/img/logoInvest.png'
import '../assets/styles/navi.scss'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../context/AuthContext'

const Navi = () => {

  const {logout,isAuthenticated}=useContext(AuthContext);
  const [currentUser,setCurrentUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("login")
  }

  const handleLogout = ()=>{
    logout();
    navigate("login")
  }

  const getCurrentUser = async()=>{
    const url = "https://api.escuelajs.co/api/v1/auth/profile";
    const response = await axios.get(url,{
      headers:{
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken")).access_token}`
      }
    })
    const user = response.data;
    setCurrentUser(user);
  }

  useEffect(()=>{
    if(isAuthenticated){
      getCurrentUser();
    }
  },[currentUser])

  return (
    <>
      <nav>
        <div className='brand'>
            <img src={Logo} alt="logo"/>
            <h3><NavLink to="home">Investing</NavLink></h3>
        </div>
        <div className='user-card'>
            {currentUser &&
              <div className='user'>
              <img src={currentUser.avatar} alt="profilePhoto" />
              <span>{currentUser.name} - {currentUser.role}</span>
              <button className='bn30'><NavLink to="stock">Portföy</NavLink></button>
              </div>
            }
            
            <button onClick={isAuthenticated?handleLogout:handleLogin} className='bn30'><NavLink to="login">{isAuthenticated?"Çıkış Yap":"Giriş Yap"}</NavLink></button>
            
        </div>
      </nav>
      <Outlet/>
    </>
    
  )
}

export default Navi