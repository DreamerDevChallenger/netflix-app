import { styled } from "styled-components";
import { colors_Pallete } from "../../../utils/styles";

const { fourth_background } = colors_Pallete;

const PosterSignupLoginStyled = styled.article`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  .login-signup-poster {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transform: scale(1.25) translateY(-15%);
  }
  .background-shadow-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to top,
      ${fourth_background}80 0%,
      ${fourth_background}60 50%,
      ${fourth_background}80 100%
    );
    background-color: ${fourth_background}50;
  }
`;

export { PosterSignupLoginStyled };
