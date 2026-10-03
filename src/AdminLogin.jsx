
import { useState,useContext, useEffect } from "react";
import Authcontext from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminLogin=()=>{

    const nav=useNavigate();
    const {login}=useContext(Authcontext);
    const[name,setName]=useState('');
    const[pass,setPass]=useState('');
    const [hover, setHover] = useState(false);

      
    useEffect(()=>{
      const logged=localStorage.getItem("islogged",true);
      if(logged){
         nav('/admindash');
      }
    },[])
   const submit = async () => {
    if(name==null&&pass==null) { 
            return  alert("something wrong")
        }
  try {
    const response = await axios.post("http://localhost:8080/admin/admnlogin", {
      aname: name,
      apass: pass
    });
    console.log(response.data);
    localStorage.setItem("islogged",true);
    // localStorage.setItem("Cid",val);
    alert("passed ");
    login("admin");
    nav('/admindash');
    

  } catch (error) {
    console.error("Error during registration:", error);
    alert("Registration failed");

  }
};
    
    
/* Background blur and gradient */
// #background {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(135deg, #74ebd5, #9face6);
//   filter: blur(8px);
//   z-index: -1;
// }

/* Glassmorphic form container */
const formStyle = {
  background: 'rgba(90, 84, 84, 0.4)',
  borderRadius: '16px',
  padding: '30px',
  width: '320px',
  margin: '100px auto',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  fontFamily: '"Poppins", sans-serif',
  color: '#143c3dff',
  transition: 'all 0.4s ease-in-out'
};

/* Heading style */
const h3 = {
  textAlign: 'center',
  fontSize: '28px',
  marginBottom: '20px',
  fontWeight: '600',
  color: '#1d6cffdd',
fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'

  
};

/* Label styling */
const labelStyle = {
  display: 'block',
  marginBottom: '15px',
  fontSize: '20px',
  fontWeight: '500',
  color: '#ffffffff',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'

};

/* Input styling */
const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  borderRadius: '8px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: '#fff',
  fontSize: '14px',
  transition: 'background-color 0.3s ease-in-out',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'

};

/* Button styling with hover and API hit animation */
const buttonStyle = {
  width: '100%',
  padding: '12px',
  marginTop: '20px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#6a11cb',
  backgroundImage: 'linear-gradient(315deg, #6a11cb 0%, #2575fc 74%)',
  color: '#fff',
  fontWeight: '600',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
};

// Optional: Add dynamic styles when API hits
const buttonStyleLoading = {
  ...buttonStyle,
  backgroundImage: 'linear-gradient(315deg, #ff6a00 0%, #ee0979 74%)',
  transform: 'scale(0.98)',
  boxShadow: '0 0 20px rgba(28, 25, 25, 0.6)'
};
  return (
    <>
   
            <div id="background"></div>

    <div style={formStyle}>
        <h3 style={h3}>Admin login</h3>
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
        style={buttonStyleLoading}
      >
        login
      </button>
      <br />
      <br />
      <div id="newuser"  style={{ cursor: 'pointer',color:"white" }}onClick={()=>{
        nav('/adminreg')
      }}>New user??</div>
    </div>
    </>
  );

}
export default AdminLogin;