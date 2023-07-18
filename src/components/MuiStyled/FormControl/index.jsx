import { FormControl } from "@mui/material";

const FormControlUI = ({ children }) => {
  return (
    <FormControl sx={{ display: "flex", gap: "32px" }}>{children}</FormControl>
  );
};

export default FormControlUI;
