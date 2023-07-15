import { FormControl } from "@mui/material";
import TextFieldUI from "../../../MuiStyled/TextField";
import CardFormUI from "../../../MuiStyled/CardForm";

const SignupForm = () => {
  return (
    <CardFormUI>
      <FormControl
        sx={{
          background: "white",
        }}
      >
        <TextFieldUI label="Outlined"></TextFieldUI>
      </FormControl>
    </CardFormUI>
  );
};

export default SignupForm;
