import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [passwordType, setPasswordType] = useState("false");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const data = {
    username: userName,
    email: email,
    password: password,
    confirmPassword: confirmPwd,
  };
  console.log(data);

  const checkConfirmed = (e) => {
    setConfirmPwd(e.target.value);

    if (password === e.target.value) {
      setError("");
      console.log("checked");
    } else {
      setError("Confirm Password doesn't match Password!");
    }
  };

  const handleClickShowPassword = () => {
    setPasswordType(!passwordType);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
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

            <div className="inputUserName">
              <FormControl sx={{ m: 1, width: "58ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-username">
                  User Name
                </InputLabel>
                <OutlinedInput
                  id="filled-adornment-username"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </FormControl>
            </div>
            <div className="inputEmail">
              <FormControl sx={{ m: 1, width: "58ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="filled-adornment-email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
            </div>

            <div>
              <FormControl sx={{ m: 1, width: "58ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="filled-adornment-password"
                  type={passwordType ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {passwordType ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="inputConfirmPassword">
              <FormControl sx={{ m: 1, width: "58ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="filled-adornment-password"
                  type={passwordType ? "text" : "password"}
                  value={confirmPwd}
                  onChange={(e) => checkConfirmed(e)}
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {passwordType ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
