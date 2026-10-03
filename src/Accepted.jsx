import axios from "axios"
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"

const Accepted=()=>{

    const {val}=useParams();
    const[isbool,setIsbool]=useState(false);
    const[res,setRes]=useState([]);

    const controller=new AbortController();
            function  datefomat(backendDate){
                      const date = new Date(backendDate);
        if (isNaN(date.getTime())) return 'Invalid date';
        
        // Indian format: "19 Dec 2025, 10:50 AM"
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
        setTimeout((fetching),3000,(controller));
      return()=>{
        console.log("Component Unmounted..")
        controller.abort();
      }

    },[])

    const fetching=async ()=>{
        
            try{
            const api=await axios.get(`http://localhost:8080/client/accepted_order/${val}`,{signal:controller.signal});
            const response=await api.data;
             const formattedData = api.data.map(item => ({
                    ...item,
                    formattedBookedTime: datefomat(item.bookedTime)
                }));
            datefomat(response.bookedTime);
            console.log(response);
            setRes(formattedData);
            setIsbool(true);
            }catch(error){
                console.log(error);
            }
        
    }
    return (
      <>
              <div id="background"></div>
    <div>
                       <style>{`
                    .child-container {
                    max-width: 960px;
                    margin: 24px auto;
                    padding: 20px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    color: #2c3e50;
                    background: #fdfdfd;
                    border-radius: 16px;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
                    }

                    .loading-text {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #34495e;
                    padding: 50px 0;
                    }

                    /* Table Styles */
                    .styled-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0 10px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 0 8px rgba(20, 20, 31, 0.05);
                    overflow: hidden;
                    }

                    .styled-table thead tr {
                    background: linear-gradient(90deg, #0072ff 0%, #00c6ff 100%);
                    color: white;
                    font-weight: 700;
                    }

                    .styled-table thead th {
                    padding: 14px 24px;
                    text-align: left;
                    font-size: 1rem;
                    }

                    .styled-table tbody tr {
                    background: #f9fbff;
                    box-shadow: 0 2px 6px rgba(0, 114, 255, 0.06);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    border-radius: 8px;
                    cursor: default;
                    }

                    .styled-table tbody tr:hover {
                    background: #e0f0ff;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 114, 255, 0.15);
                    }
                    .cntrtag{
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        font-weight:bolder;
                        font-size: x-large;
                        color: rgba(26, 177, 52, 1);
                    }

                    .styled-table tbody td {
                    padding: 14px 24px;
                    font-size: 0.95rem;
                    color: #34495e;
                    border-bottom: none;
                    }

                    /* Rounded corners on first and last cells */
                    .styled-table tbody tr td:first-child {
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                    }

                    .styled-table tbody tr td:last-child {
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    }

                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                    .styled-table,
                    .styled-table thead,
                    .styled-table tbody,
                    .styled-table th,
                    .styled-table td,
                    .styled-table tr {
                        display: block;
                        width: 100%;
                    }
                    .styled-table thead tr {
                        position: absolute;
                        top: -9999px;
                        left: -9999px;
                    }
                    .styled-table tbody tr {
                        margin-bottom: 20px;
                        background: #fff;
                        box-shadow: 0 3px 10px rgba(0, 114, 255, 0.1);
                        border-radius: 12px;
                        padding: 16px;
                    }
                    .styled-table tbody td {
                        border: none;
                        position: relative;
                        padding-left: 50%;
                        text-align: right;
                    }
                    .styled-table tbody td::before {
                        position: absolute;
                        top: 14px;
                        left: 24px;
                        width: 45%;
                        white-space: nowrap;
                        font-weight: 700;
                        color: #0072ff;
                        content: attr(data-label);
                        text-align: left;
                        font-size: 0.9rem;
                    }
                    
                    
                    }


`}</style>
            <div className="child-container">
      {!isbool ? (
        <center className="loading-text">Loading...</center>
      ) : (
        <div>
            <center className="cntrtag">Accepted Orders</center>
        <table className="styled-table">
            
          <thead>
            <tr>
              <th>#</th>
              <th>ProductName</th>
              <th>Booked Time</th>
              <th>UserName</th>
            <th>Booked Id</th>
            </tr>
          </thead>
          <tbody>
            {res.map((e, index) => (
              <tr key={index}>
                <td data-label="#">{index + 1}</td>
                <td data-label="ProductName">{e.prodName}</td>
                <td data-label="Booked Time">{e.formattedBookedTime}</td>
                <td data-label="Rejected Time">{e.cname}</td>
                <td>{e.bid}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
        </div>
    </div>
    </>
    )
}
export default Accepted;