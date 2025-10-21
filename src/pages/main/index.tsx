import { MainContainer } from "./styles";

import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";
import Second from "./Second";
import Description from "./Description";
const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <Second />
      <Card />
      <Description />
      <Footer />
    </MainContainer>
  );
};

export default Main;
