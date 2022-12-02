import React, { useEffect, useContext } from 'react';
import { loginUser } from '../../services/users';
import { useNavigate } from 'react-router';
import { UserContext } from '../../components/providers/user-provider';
import Input from '../../components/common/input/input.component.jsx';
import './login.css';

const LoginComponent = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (userContext.user?.id) {
      navigate('/view', { replace: true });
    }
  });


  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const handelLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    /**
     * @type {Array}
     */
    const user = await loginUser(email, password);

    console.log(user);

    if (user) {
      userContext.setUser(user);
      navigate('/view', { replace: true });
    } else {
      alert('email or password are not correct, try again !');
    }

  };



  return (
    <div className="login-page">

      <div className="side-image">
        <h1 className='frying-nemo-title'>Frying Nemo</h1>
        <p className='caption'>It is the craziest place for some crazy food.</p>
        <img src="/images/image.png" alt="fish" />
      </div>
      <form onSubmit={handelLogin}>
        <h1>Log in</h1>
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
        <span>new user? <a href="#" className='create-account'>create account</a> </span>
      </form >
    </div >

  );
};

export default LoginComponent;
