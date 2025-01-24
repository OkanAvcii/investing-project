import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {

  const[username,setUserName] = useState("");
  const[password,setPassword] = useState("");
  const{login} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e)=>{
    e.preventDefault();
    try{
      await login(username,password);
      navigate("/");
      console.log("Başarılı");
    }
    catch(error){
      alert("Login Failed!");
      setUserName("");
      setPassword("");
      console.log("Hatalı");
    }
  }

  return (
    <form>
      <div className="login">
      <h3>Giriş Sayfası</h3>
        <label>Kullanıcı Adı</label>
        <input value={username} onChange={e=>setUserName(e.target.value)} type="text" placeholder="Kullanıcı Adı" />

        <label>Şifre</label>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="text" placeholder="Şifre" />

        <div className="login-buttons">
          <button disabled={username===""||password===""} onClick={handleLogin}>Giriş Yap</button>
          <button>Kayıt Ol</button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
