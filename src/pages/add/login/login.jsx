import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../../components/add/form/data/users";
import Input from "../../../components/common/input/input";
import { UserContext } from "../../../components/provider/provider";
import './login.css';

const LoginPage = (props) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userContext.user?.id) {      
      
      navigate('/view');
    }
  }, []);
  /** 
  * Handler function for the form onSubmit event.
  * @param {React.FormEvent<HTMLFormElement>} e Event object.
  */

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    if (email && password) {
      const user = await loginUser(email, password);

      if (user) {
        userContext.setUser(user);
        navigate('/view', { replace: true });
      } else {
        alert("Email or Password are not correct! Please try again.");
      }
    }

  };
  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <h1>Welcome Back</h1>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="ahmad@example.com"
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          required
        />
        <div>
          <input className="nemo-button" type="submit" value="Login" />
        </div>
      </form >
    </div >

  );
};
export default LoginPage;
