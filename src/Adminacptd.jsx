import { useState,useEffect } from "react";
import axios from "axios";
const Adminacptd=()=>{
      const [datas,setDatas]=useState([]);
        const [isshow,setIshow]=useState(false);
        const format=(dateupdate)=>{
                   const date = new Date(dateupdate);
        if (isNaN(date.getTime())) return 'Invalid date';
        
  
        return date.toLocaleString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }); 
          } 
        useEffect(()=>{
            setTimeout(fetching,2000);
        },[])
 const fetching=async()=>{
       
       try{ const api=await axios.get('http://localhost:8080/bookings/accepted');
        // const value=api.data;
        console.log(api.data);
        const updatedformat=api.data.map((e)=>({
          ...e,
          formatedbookedtime:format(e.booked_time),
          formatedacceptedtime:format(e.acceptedtime)
        }))
        setDatas(updatedformat);
        setIshow(true);
    }catch(error){
        console.log(error);

    }
    }
    return (
         <>
                 <div id="background"></div>

        <div>
            <style>
                {`/* Container styling */
#table {
  margin: 30px auto;
  width: 90%;
  border-collapse: collapse;
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(to right, #f0f4ff, #e6f0ff);
}

/* Table base */
#table table {
  width: 100%;
  border-spacing: 0;
}

/* Header styling */
#table thead th {
  background: linear-gradient(to right, #004080, #0059b3);
  color: #ffffff;
  padding: 14px 18px;
  text-align: left;
  border-bottom: 4px solid #003366;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.95rem;
}

/* Body cell styling */
#table tbody td {
  padding: 14px 18px;
  border-bottom: 1.5px solid #dcdcdc;
  font-size: 0.92rem;
  color: #333;
  transition: background-color 0.8s ease, box-shadow 0.8s ease;
}

/* Row hover effect */
#table tbody tr:hover td {
  background-color: #eaf4ff;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
}

/* Rejected Time column styling */
#table tbody td:nth-child(5) {
  background-color: rgba(255, 0, 0, 0.12);
  box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.2);
  color: #b30000;
  font-weight: bold;
}

/* Rejected Time animation */
#table.fade-rejected td:nth-child(5) {
  animation: enhancedFadeInOut 3s ease-in-out forwards;
}

@keyframes enhancedFadeInOut {
  0%, 100% {
    background-color: rgba(255, 0, 0, 0.12);
    box-shadow: inset 0 0 6px rgba(255, 0, 0, 0.2);
  }
  50% {
    background-color: rgba(255, 0, 0, 0.35);
    box-shadow: inset 0 0 20px rgba(255, 0, 0, 0.6);
  }
}

/* Loading text styling */
h2 {
  text-align: center;
  color: #444;
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 40px;
  letter-spacing: 0.04em;
  font-size: 1.2rem;
  animation: fadeInText 2s ease-in-out;
}

#table.fade-rejected {
  animation: fadeInTable 1.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInTable {
  to {
    opacity: 1;
  }
}

/* Rejected Time column animation */
#table.fade-rejected td:nth-child(5) {
  animation: enhancedFadeInOut 3s ease-in-out infinite;
}

/* Pulse-style fade effect */
@keyframes enhancedFadeInOut {
  0%, 100% {
    background-color: rgba(19, 158, 12, 0.9);
    box-shadow: inset 0 0 6px rgba(64, 255, 0, 0.62);
  }
  50% {
    background-color: rgba(119, 255, 0, 0.4);
    box-shadow: inset 0 0 20px rgba(61, 238, 55, 0);
  }
}

/* Row entrance animation */
#table.fade-rejected tbody tr {
  animation: rowFadeIn 0.6s ease-in-out;
}

@keyframes rowFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


                `}
            </style>

           {isshow ? <div id="table" className={isshow ? "fade-rejected" : ""}>
                <table>
                    <thead>
                        <th>Booking ID</th>
                        <th>Courier ID</th>
                        <th>Product Name</th>
                        <th>Booked Time</th>
                        <th>Accepted Time</th>
                    </thead>
                    <tbody>
                        {datas.map((e,index)=>(
                            <tr key={index}>
                                <td>{e.bid}</td>
                                <td>{e.cid}</td>
                                <td>{e.prodname}</td>
                                <td>{e.formatedbookedtime}</td>
                                <td>{e.formatedacceptedtime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>:
            <h2>Loading</h2>}
            
            
            </div>
        </>
    );
}
export default Adminacptd;