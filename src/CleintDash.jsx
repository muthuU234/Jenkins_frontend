import React, { useContext, useEffect, useState } from 'react'
import './Nav.css'; 
import { Outlet, Route, useNavigate, useParams } from 'react-router-dom';
import im from './assets/fast-crlogo.jpg'
import Authcontext from './AuthContext';
import image  from './assets/message-icon-png-14.png'
import {Client} from '@stomp/stompjs';
import SockJs from "sockjs-client"
import Notification from './Notify';
import {ToastContainer,toast} from "react-toastify";

function CleintDash() {

  const{logout}=useContext(Authcontext);
      const navigate=useNavigate();
      // console.log(id);
      const [msgcount,setMsgcount]=useState(0);
      const [msg,setMsg]=useState();

      const {val}=useParams();  


      useEffect(()=>{
          const client = new Client({
            webSocketFactory:()=>new SockJs('http://localhost:8080/ws'),
            reconnectDelay:5000,
            onConnect:(()=>{
              console.log("Connected to WebSocket server");
              const subscription=client.subscribe(`/topic/notify/${val}`,(notification)=>{
                const data =JSON.parse(notification.body);
                setMsg(data);

                console.log("Notification received:", data);
                setMsgcount(prev=>prev+1);
                toast.info("Hi courier Data Was Updated...",data);
                
              },
            
            
            )
            

              client.onDisconnect(()=>{
                subscription.unsubscribe();
                console.log("Disconnected from WebSocket server");
              })
            }
          
          
          ),


          OnStompError: (frame) => {
            console.error(
                "STOMP ERROR:",
                frame.headers["message"]
            );

            console.error(
                "STOMP BODY:",
                frame.body
            );
        },

        onWebSocketError: (error) => {
            console.error(
                "WEBSOCKET ERROR:",
                error
            );
        }
          })
        
          client.activate();

          return()=>{
            client.deactivate();
          }

      },[]);

      const gotoNotifypage=()=>{
        navigate(`/clientdash/${val}/notify`,{state:{msg:msg?msg:""}});
      }
      // <Route path="notify" element={<Notification msg={msg?msg:""} />} />

  return (
    <>
    <ToastContainer/>
         <div id="background"></div>

 <nav className="nav-bar">
      <div className="nav-items">
               <div onClick={()=>navigate('welcome')}><img src={im} alt=""  id="size"/></div>
        <div onClick={() => navigate('book')}>Book Courier</div>
        <div onClick={() => navigate('status')}>Check Status</div>
        <div onClick={() => navigate('accepted')}>Accepted Orders</div>
        <div onClick={() => navigate('rejected')}>Rejected Orders</div>
        <div onClick={() => {
                        localStorage.setItem("islogged",false);
                        logout();
                        localStorage.removeItem("Cid");
                        navigate('/clientlogin');
              // localStorage.removeItem("islogged");
                //  localStorage.removeItem("Cid");

          }} id="logout">Logout</div>

        <div className="image-box" onClick={gotoNotifypage}> 
          <img src={image} alt="Message Icon" width="70px" />
          <span className='corner-text'>{msgcount}</span>
        </div >

      </div>

      
    </nav>

  <Outlet />
      
    </>
  )
}

export default CleintDash;
