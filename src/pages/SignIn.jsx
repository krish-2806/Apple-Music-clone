import {useState } from "react";
import Lottie from "lottie-react";
import link from "react-router-dom";
import Robot from "../animations/Robot.json";
import { useNavigate } from "react-router-dom";
import './SignIn.css';

const Signin = () => {
  const LottieComponent = Lottie.default || Lottie;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const  [errors, setErrors]= useState({
    username: "",
    password: "",
  });

  const HandleChange = (e) =>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
    validField(name,value);
  }
  const navigate = useNavigate();

  const validField = (name, value) =>{
    let error = "";
    if(name === "username"){
      if(value.trim() === ""){
        error="Username is required";
      }else if(!/^[A-Za-z ]{3,}$/.test(value)){
        error ="Minimum 3 letters. Only alphabets allowed.";
      }
    }
    if(name === "password"){
      if(value.trim()===""){
        error="Passsword is required";
      }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/.test(value)){
        error="8+ chars, uppercase, lowercase, number & special character.";
      }
    }
    setErrors((prev)=>({
      ...prev,
      [name]: error,
    }))
  }

const HandleSubmit = (e) => {
    e.preventDefault();

    const username = formData.username.trim();
    const password = formData.password;

    // Username Validation
    if (username === "") {
        setErrors((prev) => ({
            ...prev,
            username: "Username is required",
        }));
        return;
    }

    if (!/^[A-Za-z ]{3,}$/.test(username)) {
        setErrors((prev) => ({
            ...prev,
            username: "Minimum 3 letters. Only alphabets allowed.",
        }));
        return;
    }

    // Password Validation
    if (password === "") {
        setErrors((prev) => ({
            ...prev,
            password: "Password is required",
        }));
        return;
    }

    if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/.test(password)
    ) {
        setErrors((prev) => ({
            ...prev,
            password:
                "8+ chars, uppercase, lowercase, number & special character.",
        }));
        return;
    }

    // Check Local Storage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (
        username !== savedUsername ||
        password !== savedPassword
    ) {
        alert("Invalid Username or Password");
        return;
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
    window.location.reload();
};

  const HandleSignUp = ()=>{
    navigate("/signup");
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
            <input type="text" name="username" placeholder="Your username" value={formData.username} required onChange={HandleChange} />
            <span className="error">{errors.username}</span>
          </div>

          <div className="input-box">
            <input type="password" name="password" placeholder="Your password" value={formData.password} required onChange={HandleChange} />
            <span className="error">{errors.password}</span>
          </div>

          <div className="options">
            <label className="rem">
              <input type="checkbox" /> Remember me
            </label>

            <a href="/">Forgot password?</a>
          </div>

          <button type="submit" onClick={HandleSubmit}>Login</button>
          <p className="signup">Don't have an account? <Link to="/signup" onClick={HandleSignUp}>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;