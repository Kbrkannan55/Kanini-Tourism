import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRegister = () => {

    const [userDTO,setUserDTO]=useState(
        {
            "firstName":"",
            "lastName":"",
            "username":"",
            "email":"",
            "password":"",
            // "role":"User"
        }  
    );
    const [success,setSuccess]=useState(false)

    const register=()=>{
        console.log(userDTO);
            fetch('https://localhost:7190/api/Owner/register',{
                "method":"POST",
                "headers":
                {
                    "accept": "text/plain",
                    "Content-Type": 'application/json'   
                },
                "body":JSON.stringify(userDTO)}
                ).then(async (data)=>
                {
                if(data.status == 200)
                {
                    // for toast message succesfully 
                    var user = await data.json();
                    setSuccess(true);
                    toast.success("Registered successfully!");
                }})
    
              }
  return (
    <div>
      <div>User Register</div>
      <div>
        <input placeholder='Enter your FirstName' onChange={(event)=>setUserDTO({...userDTO,"firstName":event.target.value})} ></input>
      </div>
      <div>
        <input placeholder='Enter your LastName' onChange={(event)=>setUserDTO({...userDTO,"lastName":event.target.value})} ></input>
      </div>
      <div>
        <input placeholder='Enter your UserName' onChange={(event)=>setUserDTO({...userDTO,"username":event.target.value})} ></input>
      </div>
      <div>
        <input placeholder='Enter your Email' onChange={(event)=>setUserDTO({...userDTO,"email":event.target.value})} ></input>
      </div>
      <div>
        <input placeholder='Enter your Password'  onChange={(event)=>setUserDTO({...userDTO,"password":event.target.value})}></input>
      </div>
      <div>
        <button onClick={register}>Register</button>
      </div>
      {success && (
        <div>
          Registered successfully!
        </div>
      )}
    </div>
  )
}

export default UserRegister