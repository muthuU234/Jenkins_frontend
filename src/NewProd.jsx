import axios from "axios";
import { useState } from "react";

const Newprod=()=>{

    const[name,setName]=useState();
    const[price,setPrice]=useState();
    const[isShow,setIshow]=useState(false);
    const admit= async ()=>{

        try{
            const api=await axios.post('http://localhost:8080/product/newprod',{
                prodname:name,
                prodprice:price
            });
            const response= await api.data;
            console.log(response);
            setIshow(true);

        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
                <div id="background"></div>

        <div>
            <style>
                        {`.addproduct {
            background: #f9f9f9;
            border: 2px solid #ddd;
            padding: 20px;
            width: 320px;
            margin: 20px auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            flex-direction: column;
            gap: 15px;
            }

            .addproduct label {
            display: flex;
            flex-direction: column;
            font-weight: 600;
            font-size: 14px;
            color: #333;
            }

            .addproduct label input {
            margin-top: 6px;
            padding: 8px 10px;
            font-size: 14px;
            border: 1.5px solid #aaa;
            border-radius: 4px;
            transition: border-color 0.3s ease;
            }

            .addproduct label input:focus {
            border-color: #007bff;
            outline: none;
            }

            .addproduct small {
            font-weight: normal;
            margin-left: 5px;
            color: #555;
            }

            .addproduct button {
            width: 100%;
            padding: 10px 0;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            color: white;
            font-weight: 700;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            }

            .addproduct button:hover {
            background-color: #0056b3;
            }

            /* Fade-in animation */
            @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-15px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
            }

            .message {
            width: 320px;
            margin: 30px auto;
            padding: 20px;
            background-color: #e6ffe6;
            border: 2px solid #4CAF50;
            border-radius: 8px;
            color: #2e7d32;
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

            /* Emoji styling */
            .message .emoji {
            font-size: 24px;
            animation: bounce 1s ease infinite alternate;
            }

            /* Simple subtle bounce for emoji */
            @keyframes bounce {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(-6px);
            }
            }
            `}
            </style>
        {! isShow ?<div className="addproduct">

            <label >Product Name <input type="text" onChange={(e)=>setName(e.target.value)} /></label>
            <label >Price <small>inkg</small> <input type="number" onChange={(e)=>setPrice(e.target.value)}/></label>
                    <button onClick={admit}>Add</button>
        
        </div>:
        <div className="message">
                <h3>Product was Added ...<span className="emoji">🎉</span></h3>
        </div>}
</div>

        </>
    )
}
export  default Newprod;