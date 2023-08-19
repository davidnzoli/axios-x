import React from "react";
import { Navigate } from "react-router-dom";

const authentRout = ({children})=>{
let logger = false;

if(!logger){
    return <Navigate to="/auth/login" />

}
    return children;
}

export default authentRout;