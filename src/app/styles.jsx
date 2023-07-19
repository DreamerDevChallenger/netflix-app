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
  color: ${primary_color} !important;

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
  .MuiSvgIcon-root,
  .MuiPaper-root {
    color: ${primary_color};
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: ${primary_color};
    -webkit-background-clip: text !important;
  }
`;

export { AppStyled };
