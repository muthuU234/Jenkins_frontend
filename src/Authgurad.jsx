import { useContext } from "react";
import Authcontext from "./AuthContext";
import { Navigate } from "react-router-dom";

const Authgurad=({children,allowedroles})=>{
const{isLog}=useContext(Authcontext);

    if(!isLog && !allowedroles){
        return <Navigate to={'/'} replace/>
    }
    else{
        return children;
    }

}
export default Authgurad;