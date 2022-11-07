import { useNavigate } from "react-router-dom";
import Input from "../../components/common/input/input";

const Login = () => {
  const navigate = useNavigate();
 
 
 
 
 
  navigate('/login');
  return (
    <div className="login-page">
      <div className="cover">
        <h1>Hi :) </h1>
        <h3>Login In with your email and password to see our menu ! </h3>
        <img src="" alt="" />
      </div>

      <form  onSubmit={handellSubmit}>
        <div className="inputs">
          <Input
            label="Enter Your Email"
            name="Email"
            placeholder="email@Example.com"
            type="email"

          />
          <Input
            label="Enter Your password "
            name="password"
            type="password"
          />
        </div>
        <div className="LOGIN" >
          <input type="submiit" value="LOGIN" />
        </div>
      </form>
    </div >
  );

};
export default Login;