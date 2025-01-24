import axios from "axios";

const AuthService = {
    login: async (username,password) => {
        const url = "https://api.escuelajs.co/api/v1/auth/login";
        const response = await axios.post(url,{
            "email": username,
            password
        });//giriş başarılı ise access ve refresh token döner.
        console.log("AuthService:",response);
        if(response.data.access_token){
            localStorage.setItem("userToken",JSON.stringify(response.data));
            //giriş başarılı ise tokenleri localStorage'a kaydeder.
        }
        return response.data;
    },


    logout: ()=>{
        localStorage.removeItem("userToken");
        //login durumunda localStorage'a kaydedilmiş olan tokenleri siler.
    }
}

export default AuthService;