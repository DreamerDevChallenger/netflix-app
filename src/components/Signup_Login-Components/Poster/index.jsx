import { PosterSignupLoginStyled } from "./styles";
import loginPoster from "../../../assets/login.jpg";

const PosterSignupLogin = () => {
  return (
    <PosterSignupLoginStyled>
      <img className="login-signup-poster" src={loginPoster} alt="" />
      <div className="background-shadow-image"></div>
    </PosterSignupLoginStyled>
  );
};

export default PosterSignupLogin;
