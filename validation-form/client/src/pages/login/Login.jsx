import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { email: email, password: password };
  const [error, setError] = useState("");

  // const setDataEmail = (e) => {
  //   console.log("setDataEmail: ", e);
  //   setEmail(e);
  //   console.log(data);
  // };
  // const setDataPassword = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.password]: input.value });
  // };
  const [passwordType, setPasswordType] = useState("false");
  const handleClickShowPassword = () => {
    setPasswordType(!passwordType);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/home";
    } catch (error) {
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
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login</h1>
            {/* <Email mail={setDataEmail} /> */}
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
            {/* <Password pass={setDataPassword} /> */}
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
            {error && <div className={styles.error_msg}>{error}</div>}
            <button
              type="submit"
              className={styles.green_btn}
              onClick={() => {
                navigate("../home/Home.jsx");
              }}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button
              type="button"
              className={styles.white_btn}
              // onClick={() => {
              //   navigate("signup");
              // }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
