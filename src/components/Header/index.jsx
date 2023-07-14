import { HeaderStyled } from "./styles";

import { MoreHoriz, Search, Menu } from "@mui/icons-material/";
import { IconButton } from "@mui/material";

import netflixLogo from "../../assets/netflix-logo.png";

import { unit } from "../../utils/styles";

const Header = () => {
  const { giga_large } = unit;
  return (
    <HeaderStyled>
      <div id="left-header">
        <IconButton>
          <Menu fontSize={"large"} />
        </IconButton>
        <img src={netflixLogo} alt="netflix logo" height={giga_large * 2} />
      </div>
      <div id="right-header">
        <IconButton>
          <Search fontSize={"large"} />
        </IconButton>
        <IconButton>
          <MoreHoriz fontSize={"large"} />
        </IconButton>
      </div>
    </HeaderStyled>
  );
};

export default Header;
