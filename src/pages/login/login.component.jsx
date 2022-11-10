import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/providers/user-provider.component';
import Input from '../../components/common/input/input.component';
import { USERS } from '../../data/temp_data';
import './login.css';

const LoginPage = (props) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  useEffect(() => {
    // console.log(props.user);
    if (userContext.user)
      navigate('/view', { replace: true });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    if (email && password) {
      const tempUser = USERS.find(element => (element.email === email && element.password === password));
      const user = tempUser || null;
      if (user) {
        userContext.setUser(user);
        navigate('/view', { replace: true });
      } else {
        alert("user name or password are incorrect , try again .");
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
