
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Authcontext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const ClientLogin=()=>{

    const {login}=useContext(Authcontext);
    
    const[name,setName]=useState('');
    const[pass,setPass]=useState('');
    const [hover, setHover] = useState(false);
    const nav= useNavigate();
    const{isLog}=useContext(Authcontext);

    useEffect(()=>{
      const log=localStorage.getItem("islogged");
      const id=localStorage.getItem("Cid");
      if(isLog){
          nav("/clientdash/"+id);
      }else{
        nav("/clientlogin");
      }
     
    },[]);
      
   const submit = async () => {
    if(name==null&&pass==null) { 
            return  alert("something wrong")
        }
  try {
    const response = await axios.post("http://localhost:8080/client/clnt_login", {
      cname: name,
      cpass: pass
    });
            const val=response.data.cid;

   
    console.log("ID", val); 
   localStorage.setItem("islogged","true");
   localStorage.setItem("Cid",val);

    alert("passed ");
    login("client");  
    
    if(val!=0){
    nav("/clientdash/" + val);
    }else{
        nav("/clientlogin");
    }
    

  } catch (error) {
    console.error("Error during registration:", error);
    alert("Registration failed");
  }
};
    
    
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '320px',
    margin: '50px auto',
    padding: '30px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const labelStyle = {
    marginBottom: '15px',
    fontSize: '16px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #bbb',
    transition: 'border-color 0.3s ease',
    fontSize: '14px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    background: hover
      ? 'linear-gradient(45deg, #28a745, #218838)'
      : 'linear-gradient(45deg, #007bff, #0056b3)',
    color: 'white',
    padding: '12px 20px',
    marginTop: '20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: hover
      ? '0 6px 15px rgba(40, 167, 69, 0.6)'
      : '0 4px 10px rgba(0, 123, 255, 0.5)',
    transform: hover ? 'scale(1.05)' : 'scale(1)',
    fontWeight: '600',
    fontSize: '16px',
  };
  const h3={
    fontfamily:"inherit"
  }
 

  return (
    <>
    <div>
            <div id="background"></div>

    <div style={formStyle}>
        <h3 style={h3}>Client login</h3>
      <label style={labelStyle}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </label>
      <label style={labelStyle}>
        Password:
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={inputStyle}
        />
      </label>
      <button
        onClick={submit}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={buttonStyle}
      >
        login
      </button>
      <br />
      <div  style={{ cursor: 'pointer',color:"black" }}onClick={()=>{
        nav('/clientreg')
      }}>New user??</div>
    </div>
    </div>
    
      
    
    </>
  );
}
export default ClientLogin;