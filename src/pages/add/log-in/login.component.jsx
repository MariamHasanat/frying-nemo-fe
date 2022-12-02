import "./login.css";
import Input from "../../../common/input/input.component";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import { loginUser } from "../../../data/user";
import { UserContext } from "../../../components/provider/provider.component";

const LoginPage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    console.log(email);
    console.log(password);
    const user = await loginUser(email, password);
    console.log(user);
    if (user) {
      userContext.setUser(user);
      navigate('/view', { replace: true });
    } else {
      alert('email or password are not correct, try again !');
    }
  };
  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (userContext.user?.id) {
      navigate('/view', { replace: true });
    }
  }, []);

  return (
    <div className="jhk">
      <div className="body"></div>
      <div className="grad"></div>
      <div className="header">
        <h1>Welcome Back</h1>
      </div>
      <br></br>
      <div className="login">
        <form onSubmit={handleLogin}>
          <Input type="email" placeholder="example@example.com" name="email" /><br></br>
          <Input type="password" placeholder="password" name="password" /><br></br>
          <input type="submit" value={"Login"} />
        </form>
      </div>
    </div>
  );
};
export default LoginPage;