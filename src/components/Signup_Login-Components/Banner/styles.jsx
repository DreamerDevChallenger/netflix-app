import { styled } from "styled-components";

const BannerStyled = styled.article`
  z-index: 1;
  position: relative;
  margin: 50px;
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  p {
    font-size: 20px;
    font-weight: 500;
  }
  .intro-container {
    displya: flex;
    h1 {
      font-size: 40px;
      font-weight: 800;
    }
  }
  .email-input-container {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 48px 0px;
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
  }
`;

export { BannerStyled };
