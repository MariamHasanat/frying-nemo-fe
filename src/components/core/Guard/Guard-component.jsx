import React from 'react';
import { useContext } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { UserContext } from "../../../App";
import "./Guard.css";
import padlock from "./padlock.png"
const Guard = props => {

  const ContextUser = useContext(UserContext);
  const navigator = useNavigate();


  

  if (!ContextUser.user) {
    return <Navigate to="/login"></Navigate>;
  }
  else if (props.Allowed && !props.Allowed.includes(ContextUser.user.role))
   {
    return (
    <div className="access">
      <h1><img src={padlock}></img>you don't to have permission to access this page</h1>

      <button onClick={() => { navigator("/view"); }}>Back to Site</button>

      <Link to="/login" onClick={() => { ContextUser.setUser(null); }}>Switch-Account</Link>

      </div>);
  } else {
    return (<div>{props.children}</div>);

  
  }

 
};

export default Guard;