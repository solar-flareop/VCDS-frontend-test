
import "./Login.css";

const Login = () => {
  return (
    <div className="login-screen">
      <div className="img-section">
        <img src="hot-air-balloon.jpg" />
      </div>
      <div className="form-section">
        <div className="logo">
          <img src="/Logo.png" alt="Logo" className="logo-img" />
        </div>
        <div>
          <h2 className="welcome">Welcome back!</h2>
        </div>
        <form className="login-form">
          <label className="login" name="email">
            Email <span className="require-star">*</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="login-input"
            required
          />
          <label className="login" name="password">
            Password <span className="require-star">*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
          <button type="submit" className="login-with-google">
            <img
              src="/google-icon.png"
              alt="google"
              className="google-icon"
            />
            <p className="google-login-txt">Login with Google</p>
          </button>
        </form>
        <p className="do-not-have-account">
         {` Don't have account?`} <a href="/register">Signup</a> Here
        </p>
      </div>
    </div>
  );
};

export default Login;