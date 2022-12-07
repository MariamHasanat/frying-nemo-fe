import React, { useContext, useEffect } from 'react';
import './login.css';

import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/users.service.js';

import Input from '../../components/common/input/input.component';
import { UserContext } from '../../components/providers/user-provider.component';

const LogIn = () => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (userContext.user)
            navigate('/view', { replace: true });
    }, []);

    /**
     * Handler function for the form onSubmit event.
     * @param {React.FormEvent<HTMLFormElement>} e Event object.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();
        if (email && password) {
            const user = loginUser(email, password);
            if (user) {
                userContext.setUser(user);
                navigate('/view', { replace: true });
            }
            else
                alert("Incorrect Email or Password :(");
        }
    };
    return (
        <div className='log-in'>
            <form onSubmit={handleSubmit}>
                <h1>welcome</h1>
                <Input
                    type={"email"}
                    name={"email"}
                    label={"email"}
                    placeholder={"abc@example.com"}
                    required
                />
                <Input
                    type={"password"}
                    name={"password"}
                    label={"password"}
                    required
                />
                <button type='submit' className='nemo-button'>LogIn</button>
            </form>
        </div>
    );
};

export default LogIn;