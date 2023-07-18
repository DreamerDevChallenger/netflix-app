import {
  CardActions,
  CardContent,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import TextFieldUI from "../../../MuiStyled/TextField";
import CardFormUI from "../../../MuiStyled/CardForm";
import ButtonUI from "../../../MuiStyled/Button";
import FormControlUI from "../../../MuiStyled/FormControl";

import { useState } from "react";

import { colors_Pallete } from "../../../../utils/styles";

const SignupForm = ({ isHidden }) => {
  const [passwordIsShowed, setPasswordIsShowed] = useState(false);
  const { second_background } = colors_Pallete;

  const [validEmail, setValidEmail] = useState({
    isError: false,
    value: "",
  });

  const [validPassword, setValidPassword] = useState({
    isError: false,
    value: "",
  });

  const handleEmailValidation = (e) => {
    const regexp = new RegExp(
      "^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+.)+[a-z]{2,5}$"
    );

    setValidEmail({
      isError: regexp.test(e.target.value),
      value: e.target.value,
    });
  };

  const handlePasswordValidation = (e) => {
    const regexp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    setValidPassword({
      isError: regexp.test(e.target.value),
      value: e.target.value,
    });
  };

  console.log(validEmail);
  return (
    <CardFormUI className={`form-container ${isHidden ? "isHidden" : ""}`}>
      <CardContent>
        <h3>Sign Up</h3>
        <form className="form">
          <FormControlUI>
            <TextFieldUI
              label="Email"
              type="email"
              autoComplete="username"
              error={
                !validEmail.isError && validEmail.value !== "" ? true : false
              }
              value={validEmail.value}
              required
              onChange={(e) => handleEmailValidation(e)}
              InputProps={{
                sx: { backgroundColor: second_background + "90" },
              }}
            />
          </FormControlUI>
          <FormControlUI>
            <TextFieldUI
              label="Password"
              type={passwordIsShowed ? "text" : "password"}
              autoComplete="current-password"
              required
              error={
                !validPassword.isError && validPassword.value !== ""
                  ? true
                  : false
              }
              onChange={(e) => handlePasswordValidation(e)}
              value={validPassword.value}
              InputProps={{
                sx: { backgroundColor: second_background + "90" },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => setPasswordIsShowed(!passwordIsShowed)}
                  >
                    <IconButton>
                      {passwordIsShowed ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextFieldUI>
          </FormControlUI>
          <CardActions>
            <ButtonUI sx>Sign Up</ButtonUI>
          </CardActions>
        </form>
      </CardContent>
    </CardFormUI>
  );
};

export default SignupForm;
