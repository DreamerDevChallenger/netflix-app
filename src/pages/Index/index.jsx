import Banner from "../../components/Signup_Login-Components/Banner";
import PosterSignupLogin from "../../components/Signup_Login-Components/Poster";
import SignupHeader from "../../components/Signup_Login-Components/SignupHeader";

import { IndexStyled } from "./styles";

const Index = () => {
  return (
    <IndexStyled>
      <SignupHeader />
      <section className="banner-container">
        <PosterSignupLogin />
        <Banner />
      </section>
      <section className=""></section>
    </IndexStyled>
  );
};

export default Index;
