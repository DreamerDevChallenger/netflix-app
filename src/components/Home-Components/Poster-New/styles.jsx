import { styled } from "styled-components";
import { colors_Pallete } from "../../../utils/styles";

const { second_background } = colors_Pallete;

const PosterStyled = styled.section`
  position: relative;
  height: 90vh;

  .poster-container {
    box-shadow: inset 10px 10px 10px 10px white;
    position: absolute;
    top: 0;
    width: 100%;
    height: 90vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &::after {
    box-shadow: inset 100px 0px 100vh 10vh ${second_background};
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export { PosterStyled };
