
import LoginBlock from '../../components/login-block/login.component';
import { checkUser } from '../../services/checkUser';
import './login.css'

const submitHandler = e => {
    e.preventDefault();
    console.log('welcome here!')
}
const Login = () => {
    return(
        <LoginBlock onSubmit={submitHandler}/>
    )
}

export default Login;