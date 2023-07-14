import Header from "../components/Header";

import { AppStyled } from "./styles";

const App = () => {
  return (
    <AppStyled>
      <Header />
      <div className="selected" tabIndex="0" role="tab" aria-selected="true">
        hey
      </div>
    </AppStyled>
  );
};

export default App;
