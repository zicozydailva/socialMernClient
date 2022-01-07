import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LamaSocial</h3>
          <span className="loginDesc">
              Connect with your friends around the world
          </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="text" placeholder="Email" className="loginInput" />
                <input type="text" placeholder="Password" className="loginInput" />
                <button className="loginButton">Login</button>
                <span className="loginForgot">Forget password?</span>
                <button className="loginRegisterButton">Create a new Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
