import"./login.css";
import  Input  from "../../../common/input/input.component";
import { useNavigate } from 'react-router-dom';
import React,{ useEffect,useContext } from 'react';
import { loginUser } from "../../../data/user";
import { UserContext } from "../../../App";

const LoginPage=(props)=>{
  const navigate=useNavigate();
  const userContext=useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        if (email && password) {
          const user = loginUser(email,password);
          if (user) {
            props.setUser(user);
            navigate('/view', { replace: true });
          } else {
            alert("Email or Password are not correct! Please try again.");
          }
        }
      };
 useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (userContext.user?.id) {
      navigate('/view', { replace: true });
    }
  }, []);

    return(
    
      <div>

        <div className="body"></div>
        <div className="grad"></div>
        <div className="header">
          <h1>Welcome Back</h1>
        </div>
        <br></br>
        <div className="login">
          <form onSubmit={handleLogin}>
           <Input type="email" placeholder="example@example.com" name="email" /><br></br>
          <Input type="password" placeholder="password"  name="password"/><br></br>
          <input type="submit" value={"Login"} />
          </form>
          
        </div>

      </div>



    );
}
export default LoginPage;