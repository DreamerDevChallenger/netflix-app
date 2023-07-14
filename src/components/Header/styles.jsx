import { styled } from "styled-components";

import { unit } from "../../utils/styles";

const { small, extra_small, extra_large } = unit;

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${extra_small}px ${extra_large}px;
  #left-header,
  #right-header {
    display: flex;
    align-items: center;
    gap: ${small}px;
  }
`;

export { HeaderStyled };
