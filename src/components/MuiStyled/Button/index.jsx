import { Button } from "@mui/material";

import { colors_Pallete, unit } from "../../../utils/styles";

const { primary_color, primary_red } = colors_Pallete;
const { giga_small, extra_large } = unit;

const ButtonUI = ({ children }) => {
  return (
    <Button
      disableFocusRipple
      sx={{
        background: primary_red,
        borderRadius: `${giga_small}px`,
        color: primary_color,
        textTransform: "capitalize",
        padding: `6px ${extra_large}px`,

        "&:hover": {
          background: primary_red,
          boxShadow: `0 0 5px 0px ${primary_color}`,
        },
        "&:focus-visible": { boxShadow: `0 0 5px 0px ${primary_color}` },
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonUI;
