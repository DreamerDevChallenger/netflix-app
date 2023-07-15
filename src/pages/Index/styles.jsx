import { styled } from "styled-components";
import { colors_Pallete, unit } from "../../utils/styles";

const { fourth_background } = colors_Pallete;
const { giga_large } = unit;

const IndexStyled = styled.main`
  background: ${fourth_background};
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner-container {
    position: relative;
    min-height: ${giga_large}rem;
    overflow: hidden;
    width: 100%;
  }
`;

export { IndexStyled };
