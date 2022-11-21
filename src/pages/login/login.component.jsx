import { useEffect, useContext } from 'react';
import { UserContext } from '../../components/providers/user-provider.component';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/common/input/input.component';
import { loginUser } from '../../services/users';
import './login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (userContext.user?.id) {
      navigate('/view', { replace: true });
    }
  }, []);

  /**
 * Handler function for the form onSubmit event.
 * @param {React.FormEvent<HTMLFormElement>} e Event object.
 */
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (email && password) {
      const user = loginUser(email, password);
      // If Successful login, go to view page
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
        />
        <Input
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

export default LoginPage;;
