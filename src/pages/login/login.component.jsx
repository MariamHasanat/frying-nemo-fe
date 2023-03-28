import "./login.css";

import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoginForm from "../../components/login/login-form/login-form.component";
import { UserContext } from "../../components/core/providers/user-provider.component";

const LoginPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (user != null) navigate(`/home`);
  return (
    <div className="login-page hidable">
      {user == null ? <LoginForm></LoginForm> : <Navigate to="/home" replace />}
    </div>
  );
};

export default LoginPage;