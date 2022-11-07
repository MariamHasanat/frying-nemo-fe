
import LoginBlock from '../../components/login-block/login.component';
import { checkUser } from '../../services/checkUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = (props) => {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const userEmail = e.target.email.value.trim();
        const userPassword = e.target.password.value.trim();

        const user = checkUser(userEmail, userPassword)
        if (user) {
            console.log('welcome here!');
            props.setUserName(user.fullName);
            navigate('/view');
        }
        else
            alert('email/password combination is wrong, please try again or sign up');
    };

    return (
        <LoginBlock onSubmit={submitHandler} />
    );
};

export default Login;