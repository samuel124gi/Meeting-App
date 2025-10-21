import { InnerContainer, MainContainer } from "./styles";
import Logo from "../../../assets/icons/logo.svg";
const Header = () => {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <Logo />
        </InnerContainer>
      </MainContainer>
    </>
  );
};

export default Header;
