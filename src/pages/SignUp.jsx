import { useState } from "react";
import Lottie from "lottie-react";
import {Link} from "react-router-dom";
import Robot from "../animations/Robot.json";
import { useNavigate } from "react-router-dom";
import './SignIn.css';

const Signup = () => {
  const LottieComponent = Lottie.default || Lottie;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
});

const [errors, setErrors] = useState({
    username: "",
    password: "",
});

  const HandleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
        ...formData,
        [name]: value,
    });

    validateField(name, value);
};

const validateField = (name, value) => {

    let error = "";

    if (name === "username") {

        if (value.trim() === "") {
            error = "Username is required";
        }

        else if (!/^[A-Za-z ]{3,}$/.test(value)) {
            error = "Minimum 3 letters. Only alphabets allowed.";
        }

    }

    if (name === "password") {

        if (value.trim() === "") {
            error = "Password is required";
        }

        else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/.test(value)
        ) {
            error =
                "8+ chars, uppercase, lowercase, number & special character.";
        }

    }

    setErrors((prev) => ({
        ...prev,
        [name]: error,
    }));

};

  const navigate = useNavigate();
  const HandleSubmit = (e) => {

    e.preventDefault();

    validateField("username", formData.username);
    validateField("password", formData.password);

    if (
        formData.username.trim() === "" ||
        formData.password.trim() === "" ||
        errors.username ||
        errors.password
    ) {
        return;
    }

    localStorage.setItem("username", formData.username);

    localStorage.setItem("password", formData.password);

    localStorage.setItem("isLoggedIn", "false");

    alert("Account Created Successfully");

    navigate("/signin");

};
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
            <input type="text" name="username" placeholder="Your username" value={formData.username} onChange={HandleChange} />
            <span className="error">{errors.username}</span>
          </div>

          <div className="input-box">
            <input type="password" name="password" placeholder="Your password" value={formData.password} onChange={HandleChange} />
            <span className="error">{errors.password}</span>
          </div>

          <button type="submit" onClick={HandleSubmit}>Create Account</button>
          <p className="signup">Already have an account? <Link to="/signin">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;