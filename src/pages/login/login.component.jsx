import './login.css';
const Login = () => {
    return (
        <div className="login-wrapper">
            <div id="fullBg" />

            <div class="container">
                <form class="form-signin">
                    <h1 class="form-signin-heading">Please Login</h1>
                    <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                    <input type="password" class="form-control" name="password" placeholder="Password" required="" />

                    <button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                </form>
                <p class="text-center sign-up"><strong>Sign up</strong> for a new account</p>
            </div>
        </div>);
};

export default Login;