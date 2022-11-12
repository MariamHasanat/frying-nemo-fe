import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../providers/user-provider.component";


const Guard = props => {
    const userContext = useContext(UserContext);
    if (props.authorized && props.authorized.includes(userContext.user?.role)) { // admin
        return (props.children);
    }
    else if (userContext.user) { // logged in
        return <h2>
            you do not have access to this page
        </h2>;
    }
    else { // not logged in
        return <Navigate to='/login' />;
    }
};

export default Guard;