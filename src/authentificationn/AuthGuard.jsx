import { Navigate } from "react-router-dom";
import { AcountService } from "../_service/Acount.service";

const AuthGuard = ({children}) =>{
    // let logged = false;

    if(!AcountService.isLogged()){
        return <Navigate to="/" />
    }
        return children
}
export default AuthGuard;