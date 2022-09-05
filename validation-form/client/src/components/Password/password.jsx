import { React, useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function Password({ setPassword }) {
  const [passwordType, setPasswordType] = useState("false");
  const handleClickShowPassword = () => {
    setPasswordType(!passwordType);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: "58ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="filled-adornment-password"
          type={passwordType ? "text" : "password"}
          value=""
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
  );
}
