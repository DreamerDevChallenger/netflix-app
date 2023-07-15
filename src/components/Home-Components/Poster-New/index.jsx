import { PosterStyled } from "./styles";
import poster from "../../../assets/poster.jpg";

const Poster = () => {
  return (
    <PosterStyled>
      <div className="poster-container">
        <img src={poster} alt="poster new" />
      </div>
    </PosterStyled>
  );
};

export default Poster;
