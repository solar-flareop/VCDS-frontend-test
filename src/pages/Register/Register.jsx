
import "./Register.css";

const Register = () => {
  return (
    <div className="signup-screen">
      <div className="img-section">
        <img src="/hot-air-balloon.jpg" />
      </div>
      <div className="form-section">
        <div className="logo">
          <img
            src="/Logo.png"
            alt="Logo"
            className="logo-img"
          />
        </div>
        <div>
          <h2 className="register">Register to continue further!</h2>
        </div>
        <form className="signup-form">
          <label className="signup" name="name">
            Name <span className="require-star">*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="signup-input"
            required
            name="name"
          />
          <label className="signup" name="email">
            Email <span className="require-star">*</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="signup-input"
            name="email"
            required
          />
          <label className="signup" name="phoneNumber">
            Phone number <span className="require-star">*</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            className="signup-input"
            name="phoneNumber"
            maxLength={10}
            required
          />
          <label className="signup" name="email">
            Password <span className="require-star">*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            name="password"
            required
          />
          <button type="submit" className="signup-button">
            Register
          </button>
          <button type="submit" className="signup-with-google">
            <img
              src="/google-icon.png"
              alt="google"
              className="google-icon"
            />
            <p className="google-signup-txt">Register with Google</p>
          </button>
        </form>
        <p className="do-not-have-account">
          Already have account? <a href="/login">Login</a> Here
        </p>
      </div>
    </div>
  );
};

export default Register;