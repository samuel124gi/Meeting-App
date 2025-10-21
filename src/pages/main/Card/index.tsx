import { ImageContainer, Images, MainContainer } from "./styles";
import first from "../../../assets/images/image-woman-in-videocall.jpg";
import second from "../../../assets/images/image-women-videochatting.jpg";
import third from "../../../assets/images/image-men-in-meeting.jpg";
import fourth from "../../../assets/images/image-man-texting.jpg";

const Card = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <Images src={first}></Images>
      </ImageContainer>
      <ImageContainer>
        <Images src={second}></Images>
      </ImageContainer>
      <ImageContainer>
        <Images src={third}></Images>
      </ImageContainer>
      <ImageContainer>
        <Images src={fourth}></Images>
      </ImageContainer>
    </MainContainer>
  );
};

export default Card;
