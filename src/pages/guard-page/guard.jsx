import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';
// import '/guard.css';
const Guard = (props) => {

  const userContext = useContext(UserContext);

  if (props.component === 'add') {
    if (!userContext.user) {
      return <Navigate to={'/login'} />;
    }
    else
      if (props.permittedRoles && !props.permittedRoles.includes(userContext.user.role)){
        return <div>
          <p>you don't have access to this page </p>
        </div>
      }
      else {
        return props.children;
      }


  }







};
export default Guard;