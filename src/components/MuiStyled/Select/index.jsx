import { Select } from "@mui/material";
import { colors_Pallete } from "../../../utils/styles";

const { second_background, primary_color, primary_background } = colors_Pallete;

const SelectUi = ({ children, value, setState, labelId }) => {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      labelId={labelId}
      MenuProps={{
        disableScrollLock: true,
      }}
      inputProps={{
        sx: { minWidth: 150 },
        MenuProps: {
          MenuListProps: {
            sx: {
              backgroundColor: second_background,
              color: primary_color,
              ".Mui-selected": {
                backgroundColor: primary_background + 10 + "!important",
              },
            },
          },
        },
      }}
      sx={{
        backgroundColor: second_background,
        color: primary_color,

        ".MuiSvgIcon-root, .MuiInputBase-root, .MuiSelect-select, .MuiList-root,":
          {
            color: primary_color,
          },

        ".MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px !important",
          borderColor: "none ",
        },
        ".MuiList-root": {
          backgroundColor: second_background,
        },
      }}
    >
      {children}
    </Select>
  );
};

export default SelectUi;
