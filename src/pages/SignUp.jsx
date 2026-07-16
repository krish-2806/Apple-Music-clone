import { useState } from "react";
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
    alert("Successfully Created...");
    localStorage.setItem("username", formData.username);
    localStorage.setItem("password", formData.password);
    navigate("/");
  }

  const HandleSignIn = () => {
    navigate("signin");
  }
  return (
    <div className="signin-container">
      <div className="animation">
        <LottieComponent animationData={Robot} loop={true} />
      </div>
      <div className="main">
        <h1>SignUp!!</h1>
        <div className="box">
          <p>Create your new account.</p>

          <div className="input-box">
            <input type="text" name="username" placeholder="Your username" required onChange={HandleChange} />
          </div>

          <div className="input-box">
            <input type="text" name="password" placeholder="Your password" required onChange={HandleChange} />
          </div>

          <button type="submit" onClick={HandleSubmit}>Login</button>
          <p className="signup">Already have an account? <a href="/signin" onClick={HandleSignIn}>Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;