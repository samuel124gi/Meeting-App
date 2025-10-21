import {
  ButtonSmallText,
  ButtonText,
  Circle,
  Container,
  Heading,
  Image,
  InnerContainer,
  Line,
  MainContainer,
  Text,
  TopContainer,
} from "./styles";
import background from "../../../assets/images/image-footer.jpg";
import Button from "../../../component/Button";

const Footer = () => {
  return (
    <MainContainer>
      <TopContainer>
        <Line />
        <Circle>02</Circle>
      </TopContainer>
      <Image src={background} />
      <Container />
      <InnerContainer>
        <Heading>
          Experience more <br /> together
        </Heading>
        <Text>
          Stay connected with reliable HD meetings <br /> and unlimited
          one-on-one and group video <br /> sessions.
        </Text>
        <Button variant="secondary">
          <ButtonText>
            Download<ButtonSmallText> v13</ButtonSmallText>
          </ButtonText>
        </Button>
      </InnerContainer>
    </MainContainer>
  );
};

export default Footer;
