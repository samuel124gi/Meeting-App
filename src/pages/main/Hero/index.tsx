import {
  ImageContainer,
  MainContainer,
  InnerContainer,
  TextContainer,
  Heading,
  Text,
  ButtonText,
  ButtonSmallText,
  ButtonContainer,
} from "./styles";
import LeftIcon from "../../../assets/icons/left-icon.svg";
import RightImg from "../../../assets/icons/right-icon.svg";
import Header from "../Header";
import Button from "../../../component/Button";
const Hero = () => {
  return (
    <MainContainer>
      <Header />
      <InnerContainer>
        <ImageContainer>
          <LeftIcon />
        </ImageContainer>
        <TextContainer>
          <Heading>
            Group Chat <br /> for Everyone
          </Heading>
          <Text>
            Meet makes it easy to connect with others face-to- <br />
            face virtually and collaborate across any device.
          </Text>
          <ButtonContainer>
            <Button variant="primary">
              <ButtonText>
                Download<ButtonSmallText> v13</ButtonSmallText>
              </ButtonText>
            </Button>{" "}
            <Button variant="secondary">
              <ButtonText>What is it?</ButtonText>
            </Button>
          </ButtonContainer>
        </TextContainer>
        <ImageContainer>
          <RightImg />
        </ImageContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Hero;
