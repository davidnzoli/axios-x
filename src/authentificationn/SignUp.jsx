import React, { useState } from "react";
import "./signup.css"
import axios from "axios";


const Signup = ({visible})=>{
    const [adress, setadress] = useState("davinah@gmail.com");
    const [pwd, setpwd] = useState("123456780");

    const onsubmit = (e)=>{
        e.preventDefault();

        let items = {
            email : adress,
            password: pwd
        }

        axios
        .post("http://127.0.0.1:3333/api/v1/user/create", items)
        .then()
    .catch(error=> console.log(error))}
    return (visible ) ? (<div className="login">
    <form action="" style={{padding:"20px",display:"flex", 
    flexDirection:"column", 
    justifyContent:"center",
    alignContent:"center",
    gap:"20px",
    width:"100%"}} onSubmit={onsubmit}>
      <input style={{padding:"12px",width:"280px", fontSize:"20px"}} name="email" value={adress} onChange={(e)=>setadress(e.target.value)} type='text' placeholder='E-mail' />
      <input style={{padding:"12px", width:"280px", fontSize:"20px"}} name="password" value={pwd} onChange={(e)=>setpwd(e.target.value)}  type="password"  placeholder='password'/>
      <button type='submit' style={{padding:"10px",backgroundColor:"blue",width:"180px", color:"white"}}>Envoyer</button> 
    </form>
    </div>) : "";
    
}
export default Signup;