import Banner from "../../components/Signup_Login-Components/Banner";
import PosterSignupLogin from "../../components/Signup_Login-Components/Poster";
import SignupHeader from "../../components/Signup_Login-Components/SignupHeader";

import { motion, useScroll } from "framer-motion";

import { IndexStyled } from "./styles";

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <IndexStyled>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
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
