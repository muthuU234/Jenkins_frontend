import axios from "axios";
import { useEffect, useState } from "react";


const SlctRjctcr=()=>{
    
    const [isShow,setIshow]=useState(false);
    const [datas,setData]=useState([]);
    // const [choice,setChoice]=useState();

    const[msg,setMsg]=useState(false);
    const controller= new AbortController();
    useEffect(()=>{
            setTimeout(getData,3000,controller);
            return()=>{
              console.log("Component UNmounted..");
              controller.abort();
            }
    },[])
    const getData=async(controller)=>{
        try{
                const api=await axios.get('http://localhost:8080/bookings/pending',{signal:controller.signal});
                const response=await api.data;
                console.log(response);
                setData(api.data); 
                setIshow(true);
        }catch(error){
            console.log(error);
        }
    }
    const accept=(e,choice)=>{
        // setChoice("a");
        // setId(e);
        generate(e,choice);
   
       

    }
    const reject=(e,choice)=>{
        // setChoice("r");
        //  setId(e);
         console.log(e);
         generate(e,choice);
       

       
    }

    const generate=async(e,choice)=>{
        console.log(e);
        console.log(choice);
         try{
            
            const api=await axios.put(`http://localhost:8080/admin/setstatus/${e}/${choice}`);
            // const response =await api.data;
                console.log("Status Changed ",api.data);
                 setMsg(true);
        }catch(error){
            console.log(error);
         }
    }
    
         
return(
    <>
            <div id="background"></div>

    <div>
        <style>
            {`/* Table fade-in and slight zoom */
                #table {
                animation: fadeZoomIn 0.8s ease-in-out;
                transform-origin: top center;
                    margin-top: 13px;

                }

                @keyframes fadeZoomIn {
                0% {
                    opacity: 0;
                    transform: scale(0.95);
                }
                100% {
                    opacity: 1;
                    transform: scale(1);
                }
                }

                /* Table styling */
                table {
                
                width: 90%;
                margin: auto;
                border-collapse: collapse;
                background: rgba(156, 156, 156, 0.24);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 0 15px rgba(0,0,0,0.2);
                font-family: 'Segoe UI', sans-serif;
                color: #0e0c0cff;
                }
                    th{
                    color:white;
                    }
                th, td {
                padding: 12px 16px;
                text-align: center;
                border-bottom: 1px solid rgba(255,255,255,0.2);
                }

                thead {
                background: rgba(27, 37, 226, 0.84);
                }

                /* Button transitions */
                button {
                padding: 8px 14px;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s ease;
                }

                button:hover {
                transform: scale(1.1);
                background-color: #00c896;
                color: white;
                }

                /* Zoom-in emoji animation */
                @keyframes zoomEmoji {
                0% { transform: scale(0); opacity: 0; }
                50% { transform: scale(1.3); opacity: 1; }
                100% { transform: scale(1); }
                }

                .emoji-burst {
                font-size: 3rem;
                animation: zoomEmoji 0.6s ease-in-out;
                margin-bottom: 10px;
                }
              .loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #00c896;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 30px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
         #loading{
            padding:20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: x-large;
        } 



                `
                }
        </style>
         {!msg ? (
  <div>

    {isShow ? (
      <div>
        <div id="table">
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Client Name</th>
                <th>Product Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Weight</th>
                <th>Price</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((e, index) => (
                <tr key={index}>
                  <td>{e.bid}</td>
                  <td>{e.client.cname}</td>
                  <td>{e.prodname}</td>
                  <td>{e.src}</td>
                  <td>{e.dest}</td>
                  <td>{e.weight}</td>
                  <td>{e.price}</td>
                  <td>
                    <button onClick={() => accept(e.bid, 'a',e)}>Accept</button>
                  </td>
                  <td>
                    <button onClick={() => reject(e.bid, 'r',e)}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div>
           <div id="loading">
              <center>lOADING</center>
            </div>
          <div className="loader"></div>
        </div>

    )}
        </div>
        ) : (
        <div style={{ textAlign: 'center', marginTop: '50px', animation: 'fadeZoomIn 0.6s ease' }}>
            <div className="emoji-burst">✅🎉</div>
            <h2>Status Was Changed Successfully!</h2>
        </div>
        )}
{/*    
//         if(!msg){
//             return(
//         <div>
     
                
//                 return()
//            {isShow?(
//                 <div >
//                     <div id="table">
//                     <table>
//                         <thead>
//                             <th>Booking ID</th>
//                             <th>Client Name</th>
//                             <th>Product Name</th>
//                             <th>Source</th>
//                             <th>Destination</th>
//                             <th>Weight</th>
//                             <th>Price</th>
//                         </thead>
//                         <tbody>
//                            {datas.map((e, index) => (
//               <tr key={index}>
//                 <td >{e.bid}</td>
//                 <td >{e.client.cname}</td>
//                 <td >{e.prodname}</td>
//                 <td>{e.src}</td>
//                 <td>{e.dest}</td>
//                 <td>{e.weight}</td>
//                 <td>{e.price}</td>
//                 <td><button onClick={ ()=>accept(e.bid,'a')}>Accept</button></td>
//                 <td><button onClick={()=>reject(e.bid,'r')}>Reject</button></td>
//               </tr>
//             ))}
//                         </tbody>
//                     </table>
//                     </div>
        


//                     </div>
                    
                    


                    
//           ):(
//             <div>
//                 <h3>Loading</h3>
//             </div>)}
          

//         </div>


        
        
        
//     );
// }else{
//     return(
//         <>
//         <center>
//             Status Was Changed
//         </center>
//         </>
//     );
// } */}

    </div>
    </>
)
           

}
export default SlctRjctcr;