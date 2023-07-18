import { Box } from "@mui/material";
import { BannerStyled } from "./styles";
import ButtonUI from "../../MuiStyled/Button";
import { KeyboardArrowRight } from "@mui/icons-material";
import SignupForm from "../Form/SingupForm";

import { useState } from "react";

const Banner = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <BannerStyled>
      <Box className="intro-container">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
      </Box>
      <Box className="email-input-container">
        <p>
          Ready to watch? Enter your email to create or restart your membership
          ?
        </p>
        <Box className="button-container">
          <ButtonUI type="submit" onClick={() => setIsHidden(false)}>
            Get Started <KeyboardArrowRight />
          </ButtonUI>
        </Box>
        <SignupForm isHidden={isHidden} />
      </Box>
    </BannerStyled>
  );
};

export default Banner;
