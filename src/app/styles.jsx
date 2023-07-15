import { styled } from "styled-components";
import { colors_Pallete, unit } from "../utils/styles";
import NetflixOtf from "../assets/font/NetflixSans-Regular.otf";

const { primary_color } = colors_Pallete;
const { giga_large } = unit;

const AppStyled = styled.div`
  @font-face {
    font-family: "Netflix Sans";
    src: url(${NetflixOtf}) format("opentype");
  }

  font-family: "Netflix Sans";
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${primary_color};
  .MuiIconButton-root {
    color: ${primary_color};
    padding: 7.5px;
    &:hover {
      background-color: ${primary_color}10;
    }
  }
  .MuiSvgIcon-root {
    font-size: ${giga_large}px;
  }
  main {
    flex: 1;
  }
  .MuiInputBase-root {
    padding-right: ${giga_large * 2}px;
  }

  .MuiSvgIcon-root {
    color: ${primary_color};
  }

  .Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${primary_color}80 !important;
    }
  }
`;

export { AppStyled };
