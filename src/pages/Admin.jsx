import React from "react";
import { AcountService } from "../_service/Acount.service";
import { useNavigate } from "react-router-dom";

const Admin = ()=>{
    const navigate = useNavigate()
    const onclick = () =>{
        let bool = AcountService.logout();
        if(!bool){
           return navigate("/")
        }else{
            return null
        }
    }
    return <>
        <h1>ADMINISTRATEUR PAGE DASHBOARD</h1>
        <button onClick={onclick}>logout</button>
    </>
}
export default Admin;