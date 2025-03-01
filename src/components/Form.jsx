import React, { useState } from "react";
import "./Form.css";
import { IoPerson } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

export const Form = () => {

    const [action,setAction] = useState("signUp")
  return (
    <div className="main">
      <h1>{action}</h1>
      <div className="info">
        {action==="login"?<div></div>: <div className="name">
          <IoPerson />
          <input
            type="text"
            placeholder="Name
            "
          />
        </div>}
       
        <div className="name">
          <IoIosMail />
          <input
            type="text"
            placeholder="Email Id
            "
          />
        </div>
        <div className="name">
          <RiLockPasswordFill />
          <input
            type="password"
            placeholder="password
            "
          />
        </div>
      </div>

      {action==="signUp"?<div></div>: <div className="password">
      <h5>
        Forgot Password?<span>click here!</span>
      </h5>
      </div>}
      
      <div className="submit">
        <div className={action==="login"?"button gray":"button"} onClick={()=>{setAction("signUp")}}>signUp</div>
        <div className={action==="signUp"?"button gray":"button"} onClick={()=>{setAction("login")}}>login</div>
      </div>
    </div>
  );
};
