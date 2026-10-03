import { Outlet, useNavigate } from "react-router-dom";
import './Nav.css';
import im from './assets/fast-crlogo.jpg'
import { useContext } from "react";
import Authcontext from "./AuthContext";

const AdminDash=()=>{
    const navigate=useNavigate();
    const {logout}=useContext(Authcontext);

    return (
        <>
                <div id="background"></div>
        <nav className="nav-bar">
      <div className="nav-items">
        <div onClick={()=>navigate('welcome')}><img src={im} alt=""  id="size"/></div>
        <div onClick={() => navigate('decision')}>Change Status</div>
        <div onClick={() => navigate('pricechange')}>Product PriceChange</div>
        <div onClick={() => navigate('newprod')}>New Product</div>
        <div onClick={() => navigate('rejected')}>Rejected Orders</div>
         <div onClick={() => navigate('accepted')}>Accepted Orders</div>
        <div onClick={
          () =>{ 
          localStorage.removeItem("islogged");
          navigate('/adminlogin');
          logout();
          }
          } id="logout">Logout</div>

      </div>
      </nav>
      <Outlet/>
        
        </>
    );
}

export default AdminDash;