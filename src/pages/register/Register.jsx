import "./register.css";

export default function Register() {
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
                <input type="text" placeholder="Username" className="loginInput" />
                <input type="text" placeholder="Email" className="loginInput" />
                <input type="password" placeholder="Password" className="loginInput" />
                <input type="text" placeholder=" Confirm Password" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <span className="loginForgot">Forget password?</span>
                <button className="loginRegisterButton">Log into Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
