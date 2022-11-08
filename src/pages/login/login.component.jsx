import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/common/input/input.component';
import { loginUser } from '../../services/users';
import './login.css';

const LoginPage=(props)=>{
  const navigate =useNavigate();
  useEffect(()=>{
    if(props.user?.id){
      navigate('/view',{replace:true});
    }
  },[]
  );
const HandelLogin =(e)=>{
e.preventDefault();
const email =e.target.email.value.trim();
const password =e.target.password.value.trim();
if (email && password){
  const user =loginUser(email, password);
  if(user){
    props.setUser(user);
    navigate('/view',{replace:true})
  }
  else {
    alert("Email or Password are not correct! Please try again.");
  }
}

}
  return(
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
  )
}
export default LoginPage;
