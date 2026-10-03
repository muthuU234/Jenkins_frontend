import axios from "axios";
import { useEffect, useState } from "react";

const ProdprcChange=()=>{
      const [res,setRes]=useState([]);
      const[pid,setPid]=useState();
      const[prc,setPrc]=useState();
      const[msg,setMsg]=useState(false);

    const controller=new AbortController();

    const[isShow,setIshow]=useState(false);
        useEffect(()=>{
             setTimeout((getOrds),2000,controller);   
             return()=>{
              console.log("Page Unmounted");
              controller.abort();
             }
        },[])

    const getOrds=async(controller)=>{
    try{
        const api= await axios.get('http://localhost:8080/product/getproducts',{signal:controller.signal});
        const response=await (api.data);
        console.log(response);
        setRes(api.data);
        setIshow(true);
        setMsg(true);
    }
    catch(err){
        console.log("Error ",err);
    
    }
}
        const prcChange=async()=>{
            try{
                    const api=await axios.put('http://localhost:8080/product/changeprice',{
                                    pid:pid,
                                    price:prc
                                });
                    const respnse=await api.data;
                    console.log( "Value was Succesfully changed ",respnse);
                    setMsg(true);

            }catch(error){
                console.log("Error ",error)
            }
        }
    return(
        <>
                <div id="background"></div>

                   <style>{`.prod {
  max-width: 700px;
  margin: 20px auto;
  border-collapse: collapse;
  box-shadow: 0 4px 12px rgba(0, 0, 128, 0.2);
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
}

.prod table {
  width: 100%;
  border-collapse: collapse;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 8px 4px 12px rgba(56, 56, 138, 0.2);

  }

thead tr {
  background: rgba(255, 255, 255, 0.15);
  transition: background-color 0.3s ease;
}

thead th {
  padding: 12px 15px;
  font-size: 1.1rem;
  text-align: left;
  letter-spacing: 1px;
}

tbody tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.35s ease, color 0.35s ease;
}

tbody tr:hover {
  background: rgba(255, 255, 255, 0.2);
}

tbody td {
  padding: 12px 15px;
  font-size: 1rem;
}

.setValue {
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  background: linear-gradient(135deg, #ffafbd, #ffc3a0);
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(255, 105, 180, 0.4);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.setValue label {
  color: #4a1c61;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}

.setValue input[type="text"],
.setValue input[type="number"] {
  margin-top: 6px;
  padding: 8px 12px;
  border: 2px solid #a72ae5ff;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;
}

.setValue input[type="text"]:focus,
.setValue input[type="number"]:focus {
  border-color: #7b2ff7;
  box-shadow: 0 0 8px #7b2ff7;
}

.setValue button {
  background-color: #7b2ff7;
  color: white;
  border: none;
  padding: 12px 22px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.3s ease, transform 0.2s ease;
 margin-top:20px;
  }

.setValue button:hover {
  background-color: #5c1cd8;
  transform: scale(1.05);
}

center {
  font-size: 1.4rem;
  font-weight: bold;
  color: #7b2ff7;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 50px;
}
  .message {
            width: 320px;
            margin: 30px auto;
            padding: 20px;
            background-color: #e6ffe6;
            border: 2px solid #2a78edff;
            border-radius: 8px;
            color: #3a3dffff;
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 700;
            font-size: 18px;
            animation: fadeIn 1s ease forwards;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            }
            /* Fade-in and fade-out animation */
@keyframes fadeInOut {
  0% { opacity: 0; transform: scale(0.9); }
  20% { opacity: 1; transform: scale(1); }
  80% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.9); }
}

.message {
  animation: fadeInOut 3s ease-in-out;
  text-align: center;
  font-family: 'Segoe UI', 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #00c896;
  margin-top: 50px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0,0,0,0.2);
}

/* Emoji burst effect */
.emoji {
  display: inline-block;
  animation: emojiPop 0.6s ease-in-out;
  margin-left: 10px;
}

@keyframes emojiPop {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); }
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
`}</style>
          { isShow ? <div>
 
           <div className="prod">
            <table>
                <thead>
                    <th>Product Id</th>
                    <th>Product name </th>
                    <th>Product Price (kg)</th>
                </thead>
                <tbody>
                    {res.map((e,index)=>(
                        <tr key={index}>
                            <td>{e.pid}</td>
                            <td>{e.prodname}</td>
                            <td>{e.prodprice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        <div className="setValue">
            <label >Enter Product Id: <input type="text" onChange={(e)=>setPid(e.target.value)}/></label>
            <label >Enter Product Price <input type="number" onChange={(e)=>setPrc(e.target.value)}/></label>
                        <button onClick={prcChange}>Update</button>
        </div>
       
        </div>: <center>lOADING</center>}
        {!msg && <div className="loader"></div>}
       </> 
       ); 
}
export default ProdprcChange;