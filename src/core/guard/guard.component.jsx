import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/providers/user-provider.component';
import './guard.css';


/**
 * 
 * @param {{
 * children:React.ReactNode;
 * premmitedRoles?: string[];
 * }} props 
 * @returns 
 */
const Guard = (props) => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    if (!userContext.user) {
        navigate('/login', { replace: true });
    }
    else if (props.premmitedRoles && !props.premmitedRoles.includes(userContext.user.role)) {
        return (
            <div>
                You can't access this page
            </div>
        );
    }
    else {
        return (
            <div>
                {props.children}
            </div>
        );
    }

};

export default Guard;