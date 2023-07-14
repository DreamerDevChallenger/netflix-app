import { styled } from "styled-components";
import { colors_Pallete } from "../utils/styles";

const { second_background, primary_color } = colors_Pallete;

const AppStyled = styled.div`
  min-height: 100vh;
  background: ${second_background};
  display: flex;
  flex-direction: column;
  color: ${primary_color};
  div.selected {
    padding: 6px 24px;
    &:focus {
      border: 1px dashed white;
      outline: none;
    }
  }
  .MuiIconButton-root {
    color: ${primary_color};
    &:hover {
      background-color: ${primary_color}10;
    }
  }
`;

export { AppStyled };
