import { TextField, styled } from "@mui/material";
import { colors_Pallete, validations } from "../../../utils/styles";

const { primary_color } = colors_Pallete;
const { error_color } = validations;

const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  ".Mui-error": {
    color: error_color,
    "&:after": {
      borderBottomColor: error_color + "!important",
    },
  },

  ".Mui-error.Mui-focused": {
    color: error_color,
  },
  "& label.Mui-focused": {
    color: "white",
  },
  input: {
    color: "white",
  },
  ".MuiFormHelperText-root": {
    color: "white",
    textAlign: "center",
    fontSize: "16px",
  },
  "&.MuiFormControl-root": {
    ".MuiInputBase-root:after": {
      borderBottomColor: "white",
    },
  },
});

const TextFieldUI = (props) => {
  return <StyledTextField variant="filled" fullWidth {...props} />;
};

export default TextFieldUI;
