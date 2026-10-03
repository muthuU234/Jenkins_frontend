import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Bookings.css'
const Book=()=>{
  
   const[prodname,setProdname]=useState('');
   const[dest,setDest]=useState('');
   const[src,setSrc]=useState('');
   const[weight,setWeight]=useState('');
    const{val}=useParams();
    const[isShow,setIsshow]=useState(false);
    const[values,setValue]=useState('');
    



   const submit=async()=>{
    console.log(val)
    try{
            const api=await axios.post('http://localhost:8080/bookings/book',{
                prodname:prodname,
                dest:dest,
                src:src,
                weight:weight,
                cid:val
            });
            const valu=await api.data;
            console.log(valu);
            setValue(valu);
            setIsshow(true);
            
        }catch(error){
            console.log("Error Occured",error.message);
        }
   }
return (
  <>
            <div id="background"></div>
   <div className="container">
 
  {!isShow ? (
    <>
    
    <div className="form-box">
      <h2 className="heading">📦 Book Your Courier</h2>
      <label className="label">
        Product
        <input
          type="text"
          onChange={(e) => setProdname(e.target.value)}
          className="input"
          placeholder="Enter product name"
        />
      </label>
      <label className="label">
        Weight
        <input
          type="text"
          onChange={(e) => setWeight(e.target.value)}
          className="input"
          placeholder="Enter weight in kg"
        />
      </label>
      <label className="label">
        Source
        <input
          type="text"
          onChange={(e) => setSrc(e.target.value)}
          className="input"
          placeholder="Pickup location"
        />
      </label>
      <label className="label">
        Destination
        <input
          type="text"
          onChange={(e) => setDest(e.target.value)}
          className="input"
          placeholder="Delivery location"
        />
      </label>
      <button onClick={submit} className="button">
        🚀 Book Now
      </button>
    </div>
    </>
  ) : (
    <div className="result-box">
      <h3 className="heading">✅ Booking Confirmed</h3>
      <p className="result-text">{values}</p>
    </div>
  )}
</div>
</>

  );
};

    

export default Book;