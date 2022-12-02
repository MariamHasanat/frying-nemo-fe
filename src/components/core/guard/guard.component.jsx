import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from '../../providers/user-provider';

const Guard = (props) => {
  const userContext = useContext(UserContext);

  // if (props.component === 'add') {

  if (!userContext.user) {
    return <Navigate to='/login' />;

  } else if (props.permittedRoles && !props.permittedRoles.includes(userContext.user.role)) {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: 'tomato',
      fontWeight: 'bolder',
      fontSize: '30px'
    }}>
      <p>You don't have an access to this page</p>
    </div>;
  }
  else {
    return props.children;
  }

};

export default Guard;