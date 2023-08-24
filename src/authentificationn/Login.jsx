import React, { useState} from "react";
import "./login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AcountService } from "../_service/Acount.service";
import Signup from "./SignUp";

const LoginPage = () =>{
    const navigate = useNavigate();
    const [user, setUser]= useState(
        {
          email: "",
          password: ""
          // email: "davizolin93@gmail.com",
          // password: "DEV'S7@!"
        }
      )
    
      const onchange = (e)=>{
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        })
      }
      const onsubmit=(e)=>{
        e.preventDefault();
      
        console.log(user)
          
            axios.post('http://127.0.0.1:3333/api/v1/user/login', user)
          .then(resp=>{
            console.log(resp);
            AcountService.saveToken(resp.data.token);
            navigate("/Admin");
          })
    
         
          .catch((error)=>console.log(error))

          setUser({
            email: "",
            password: ""
          })
        }
    
        const [visible, setVisible] = useState(false);

    return  <div className="login">
    <form action="" style={{padding:"20px",display:"flex", 
    flexDirection:"column", 
    justifyContent:"center",
    alignContent:"center",
    gap:"20px",
    width:"100%"}} onSubmit={onsubmit}>
      <input style={{padding:"10px",width:"280px", fontSize:"20px"}} name="email" value={user.email} type='text' placeholder='E-mail' onChange={onchange}/>
      <input style={{padding:"10px", width:"280px", fontSize:"20px"}} name="password" value={user.password} type="password" onChange={onchange} placeholder='password'/>
      <button type='submit' style={{padding:"10px",backgroundColor:"blue",width:"180px", color:"white"}}>Envoyer</button>
      <h3 style={{color:"red", cursor:"pointer"}} onClick={()=>setVisible(true)}>Inscription</h3> 
     
    </form>
    
    <Signup visible={visible}/>
    </div>
}
export default LoginPage;