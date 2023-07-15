import { styled } from "styled-components";

import { unit } from "../../utils/styles";

const { extra_small, extra_large } = unit;

const HeaderStyled = styled.header`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${extra_small}px ${extra_large}px;
  position: fixed;
  #left-header,
  #right-header {
    display: flex;
    align-items: center;
    gap: ${extra_small}px;
  }
`;

export { HeaderStyled };
