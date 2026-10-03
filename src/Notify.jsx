import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Notify = () => {
  const location = useLocation();
  const message = location.state.msg;

  useEffect(() => {
    console.log("MEssage  from frontend useLocation=> ", message);
  }, []);
  return (
    <>
    <center style={{backgroundColor:"lightblue",width:"500px",height:"400px",marginTop:"30px",borderRadius:"20px" ,marginLeft:"35%"}}>
       <br />
        <h2>UserName : {message.cname}</h2>
        <h3> Booking Id : {message.bid}</h3>
        <h3>ProductName: {message.prodName}</h3>
        <h3>Weight: {message.weight}</h3>
        <h3>Status : {message.courier_status}</h3>

    </center>
      
    </>
  );
};
export default Notify;
