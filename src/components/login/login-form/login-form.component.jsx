import './login-form.css';
import { useContext, useState } from 'react';
import useToggle from '../../../hooks/toggle.hook';
import { UserContext } from '../../core/providers/user-provider.component';
import Input from '../../add/common/input/input.component';
import Button from '../../add/common/button/button.component';
import { addNewUser, authUser } from '../../../services/login.service';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterLayout, toggleRegisterLayout] = useToggle(false);
  const { setUser } = useContext(UserContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isRegisterLayout) {
      const user = addNewUser(email, password, `Ahmad Mohammad`);
      if (user != null) setUser(email, password, null);
    } else {
      const user = await authUser(email, password);
      if (!user) {
        alert(`Wrong username or password`)
        return;
      }
      setUser(user);
    }
  };

  return <form className="login-form" onSubmit={submitHandler}>
    <h1>Agent {isRegisterLayout ? `Register` : `Login`}</h1>
    <h2>Hey, Enter your details to {isRegisterLayout ? `sign up a new account` : `sign in to your account`}</h2>
    <div className='content'>
      <Input onChange={(e) => setEmail(e.target.value)} value={email} label='Username' placeholder='john_doe'></Input>
      <Input onChange={(e) => setPassword(e.target.value)} value={password} label='Password' placeholder='********' type={`password`}></Input>
      <p className='align-left'>Forgot Password?</p>
      <Button name={isRegisterLayout ? `Sign Up` : `Sign In`} type={`submit`}></Button>
      {
        isRegisterLayout ?
          <p>Already have an account <span onClick={toggleRegisterLayout}>Sign In</span></p>
          : <p>Don't have an account? <span onClick={toggleRegisterLayout}>Sign Up</span></p>
      }
    </div>
  </form>;
};

export default LoginForm;