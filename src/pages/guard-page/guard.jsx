import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { ReactComponent as Block } from '../../assets/illustrations/blocking.svg'
// import '/guard.css';
const Guard = (props) => {

  const userContext = useContext(UserContext);

  if (props.component === 'add') {
    if (!userContext.user) {
      return <Navigate to={'/login'} />;
    }
    else
      if (props.permittedRoles && !props.permittedRoles.includes(userContext.user.role)){
        return <div className='block'>
          <Block className='Blok-img' style={{display:'flex'}}/>
        <span> you don't have access to this page</span> 
        </div>
      }
      else {
        return props.children;
      }


  }







};
export default Guard;