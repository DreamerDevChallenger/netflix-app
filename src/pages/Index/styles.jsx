import { styled } from "styled-components";
import { colors_Pallete, unit } from "../../utils/styles";

const { fourth_background, primary_red } = colors_Pallete;
const { giga_large, giga_small } = unit;

const IndexStyled = styled.main`
  background: ${fourth_background};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-y: auto !important;
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${giga_small}px;
    background: ${primary_red};
    transform-origin: 0%;
    z-index: 4;
  }
  .form-container {
    transition: opacity 0.5s ease-in;
    &.isHidden {
      opacity: 0;
      visibility: hidden;
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .isAppear {
        background: red;
      }
    }
  }

  .banner-container {
    position: relative;
    min-height: ${giga_large}rem;
    overflow: hidden;
    width: 100%;
  }
`;

export { IndexStyled };
