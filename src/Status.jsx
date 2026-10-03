import { useEffect, useState } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

const Status=()=>{

const [details,setDetails]=useState([]);
const{val}=useParams();
const[isShow,setIsshow]=useState(false);

        // useEffect( ()=>{
        //         fetching;
        // });

        
        const fetching=async()=>{
              
            try{
                const api=await axios.get(`http://localhost:8080/bookings/status/${val}`);
                const response= await api.data;
                setDetails(api.data);
                console.log(response);
                console.log(details.map((e)=>console.log(e)));
                        // const fetchings=details.map((e,index)=><ul><li key={index}> <h3>{e.cname} {e.status} {e.prodName}</h3></li></ul>)
                        // setRes(fetchings);
                    setIsshow(true);
            }catch(err){
            console.log("Error: ",err.message);

          }

        }



        return (
            <>
                    <div id="background"></div>

            <div>
                 <style>{`
        .table-wrapper {
          max-width: 800px;
          margin: 40px auto;
          padding: 30px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
          color: #fff;
          text-align: center;
        }

        .table-wrapper h2 {
          margin-bottom: 20px;
          color: #05197eef;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

          }

        .booking-table {
          width: 100%;
          border-collapse: collapse;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          overflow: hidden;
        }

        .booking-table th,
        .booking-table td {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: #000000ff;
         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

          }

        .booking-table th {
          background: rgba(255, 255, 255, 0.2);
          font-weight: bold;
        }

        .booking-table tr:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .status.accepted {
          color: #0ba812ff;
          font-weight: bold;
        }

        .status.rejected {
          color: #ff4d4d;
          font-weight: bold;
        }

        .status.pending {
          color: #eacb1cff;
          font-weight: bold;
        }
      
        .custom-btn {
        
  width: 160px;
  height: 48px;
  background-color: #4B9CD3; /* Custom blue color */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.custom-btn:hover {
  background-color: #357bae; /* Darker blue on hover */
  transform: scale(1.05);    /* Slight grow effect */
}
  #btns{
                  margin-top:200px;
  }

      `}</style>

           { !isShow? <center>
            <div id="btns">
             
                            <button className="custom-btn"onClick={fetching}>Search 🔍</button>
            </div>
            </center>
            :
           <div className="table-wrapper">
  <h2>📦 Booking Status</h2>
  <table className="booking-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Booking Id</th>
        <th>Product</th>
        <th>Customer</th>
        <th>Status</th>
        
        
      </tr>
    </thead>
    <tbody>
      {details.map((e, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
         <td>{e.bid}</td>
        <td>{e.prodName}</td>
          <td>{e.cname}</td>
          <td className={`status ${e.status.toLowerCase()}`}>{e.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


              
               }
     </div>
            </>
        );
}
export default Status;
