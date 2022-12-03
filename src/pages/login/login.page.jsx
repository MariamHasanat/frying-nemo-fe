
import { React , useEffect , useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/common/input/input.component';
import { LoginUser } from '../../services/users';
import './login.css';
import { UserContext } from '../../components/providers/user-provider.component';


const LoginPage = (props) => {

  const navigate = useNavigate();
  const userContext = useContext(UserContext);



  
  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (userContext.user?.id) {
      navigate('/view', { replace: true });
    }
  }, []);


  const HandelLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    console.log(email);
    console.log(password);
 const user = await LoginUser(email,password);
      if (user) {
        userContext.setUser(user);
        navigate('/view', { replace: true });
      }
      else {
        alert("Email or Password are not correct! Please try again.");
      }
    

  };


  return (
    <div>
      <form onSubmit={HandelLogin}>
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

    </div>
  );
};
export default LoginPage;
