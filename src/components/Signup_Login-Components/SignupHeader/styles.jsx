import { styled } from "styled-components";
import { unit } from "../../../utils/styles";

const { extra_small } = unit;

const SignupHeaderStyled = styled.header`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  padding: 24px 175px;
  display: flex;
  justify-content: space-between;
  .left-header {
    .logo {
      font-size: 10px;
      width: 150px;
      height: 40px;
    }
  }
  .left-header,
  .right-header {
    display: flex;
    gap: ${extra_small}px;
    flex-direction: row;
    align-items: center;
  }
`;

export { SignupHeaderStyled };
