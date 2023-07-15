import { SignupHeaderStyled } from "./styles";
import { ReactComponent as Netflix } from "../../../assets/logo.svg";

import { useState } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import ButtonUI from "../../MuiStyled/Button";
import { Language } from "@mui/icons-material";
import SelectUi from "../../MuiStyled/Select";

const SignupHeader = () => {
  const [langue, setLangue] = useState("en");

  return (
    <SignupHeaderStyled>
      <div className="left-header">
        <Netflix className="logo" />
      </div>
      <div className="right-header">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="icon-langue">
            <Language />
          </InputLabel>
          <SelectUi value={langue} labelId="icon-langue" setState={setLangue}>
            <MenuItem className="MenuItem" value={"en"}>
              English
            </MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
          </SelectUi>
        </FormControl>
        <div>
          <ButtonUI disableFocusRipple>Sign In</ButtonUI>
        </div>
      </div>
    </SignupHeaderStyled>
  );
};

export default SignupHeader;
