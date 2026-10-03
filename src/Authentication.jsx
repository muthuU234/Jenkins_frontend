import { useState } from "react";
import Authcontext from "./AuthContext";

const Authentication=({children})=>{
const [isLog,setIslog]=useState(false);
const[role,setRole]=useState();
const login=(rle)=>{
        setIslog(true);
        setRole(rle);
}
const logout=()=>{
    setIslog(false);
}

    return(
        <Authcontext.Provider value={{isLog,login,logout,role}}>
            {children}
        </Authcontext.Provider>
    );
}
export default Authentication;