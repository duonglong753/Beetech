import { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const data = {
    username: userName,
    email: email,
    password: password,
    confirmpassword: confirmPwd,
  };
  // console.log(data);
  // console.log(error);
  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  //   console.log(data);
  // };
  const checkConfirmed = (e) => {
    setConfirmPwd(e.target.value);

    if (password === e.target.value) {
      setError("");
      console.log("check");
    } else {
      setError("Confirm Password doesn't match Password!");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/v1/auth/register";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      navigate("/login");

      setPassword("");
      setConfirmPwd("");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="User Name"
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => checkConfirmed(e)}
              value={confirmPwd}
              required
              className={styles.input}
            />

            {error && <div className={styles.error_msg}>{error}</div>}
            <button
              // disabled={!validPwd || !validMatch ? true : false}
              type="submit"
              className={styles.green_btn}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
