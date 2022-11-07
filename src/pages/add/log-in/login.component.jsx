import"./login.css";
import  Input  from "../../../common/input/input.component";
const LoginPage=()=>{
    return(
    
      <div>

        <div className="body"></div>
        <div className="grad"></div>
        <div className="header">
          <h1>Welcom Back</h1>
        </div>
        <br></br>
        <div className="login">
          <Input type="email" placeholder="example@example.com" /><br></br>
          <Input type="password" placeholder="password" /><br></br>
          <Input type="button" value="Login" />
        </div>

      </div>



    );
}
export default LoginPage;