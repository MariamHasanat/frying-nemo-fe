import React, { useContext } from 'react';
import './guard.css';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../providers/user-provider.component';

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