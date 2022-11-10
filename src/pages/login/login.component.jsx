import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/common/input/input.component';
import { UserContext } from '../../App';
import { loginUser } from '../../services/user';
import { useContext } from 'react';
import './login.css'

const LoginPage = (props) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (userContext.user?.id) {
      navigate('/view', { replace: true });
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (email && password) {
      const user = loginUser(email, password);
      if (user) {

        userContext.setUser(user);

        navigate('/view', { replace: true });
      } else {
        alert("Email or Password are not correct! Please try again.");
      }
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleLogin}>
        <h1>Welcome Back</h1>
        <Input className='inputs'
          label="Email"
          name="email"
          type="email"
          placeholder="yasmin@example.com"
        />
        <Input className='inputs'
          label="Password"
          name="password"
          type="password"
        />
        <div>
          <input className="nemo-button" type="submit" value="Login" />
        </div>
      </form >
    </div >
  );
};

export default LoginPage;
