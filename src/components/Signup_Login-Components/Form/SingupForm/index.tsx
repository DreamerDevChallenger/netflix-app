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

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { firebaseAuth } from "../../../../utils/firebase/firebase.config";

const SignupForm = ({ isHidden }: { isHidden: boolean }) => {
  const [passwordIsShowed, setPasswordIsShowed] = useState<Boolean>(false);
  const { second_background } = colors_Pallete;

  const [formValue, setFormValue] = useState({
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
  });

  const [errorForm, setErrorForm] = useState<Boolean>(false);

  const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexp = new RegExp(
      "^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+.)+[a-z]{2,5}$"
    );

    if (regexp.test(e.target.value)) {
      setErrorForm(false);
    } else {
      setErrorForm(false);
    }

    setFormValue({
      ...formValue,
      email: { value: e.target.value, isValid: regexp.test(e.target.value) },
    });
  };

  const handlePasswordValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regexp.test(e.target.value)) {
      setErrorForm(false);
    } else {
      setErrorForm(false);
    }

    setFormValue({
      ...formValue,
      password: { value: e.target.value, isValid: regexp.test(e.target.value) },
    });
  };

  return (
    <CardFormUI className={`form-container ${isHidden ? "isHidden" : ""}`}>
      <CardContent>
        <h3>Sign Up</h3>
        <form className="form">
          <FormControlUI>
            <TextFieldUI
              label="Email"
              type="email"
              autoComplete="off"
              error={
                !formValue.email.isValid && formValue.email.value !== ""
                  ? true
                  : false
              }
              value={formValue.email.value}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleEmailValidation(e)
              }
              InputProps={{
                sx: { backgroundColor: second_background + "90" },
              }}
            />
          </FormControlUI>
          <FormControlUI>
            <TextFieldUI
              label="Password"
              type={passwordIsShowed ? "text" : "password"}
              autoComplete="off"
              required
              error={
                !formValue.password.isValid && formValue.password.value !== ""
                  ? true
                  : false
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePasswordValidation(e)
              }
              value={formValue.password.value}
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
            <ButtonUI>Sign Up</ButtonUI>
          </CardActions>
        </form>
      </CardContent>
    </CardFormUI>
  );
};

export default SignupForm;
