import {useState } from "react";
import Lottie from "lottie-react";
import Robot from "../animations/Robot.json";
import { useNavigate } from "react-router-dom";
import './SignIn.css';

const Signin = () => {
  const LottieComponent = Lottie.default || Lottie;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully Login...");
    localStorage.setItem("username", formData.username);
    localStorage.setItem("password", formData.password);
    navigate("/");
  }

  const HandleSignUp = ()=>{
    navigate("signup");
  }
  return (
    <div className="signin-container">
      <div className="animation">
        <LottieComponent animationData={Robot} loop={true} />
      </div>
      <div className="main">
        <h1>Login!!</h1>
        <div className="box">
          <p>Sign in with your username and password</p>

          <div className="input-box">
            <input type="text" name="username" placeholder="Your username" required onChange={HandleChange} />
          </div>

          <div className="input-box">
            <input type="text" name="password" placeholder="Your password" required onChange={HandleChange} />
          </div>

          <div className="options">
            <label className="rem">
              <input type="checkbox" /> Remember me
            </label>

            <a href="/">Forgot password?</a>
          </div>

          <button type="submit" onClick={HandleSubmit}>Login</button>
          <p className="signup">Don't have an account? <a href="/signup" onClick={HandleSignUp}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;