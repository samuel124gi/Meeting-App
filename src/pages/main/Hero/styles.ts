import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const MainContainer = styled.div``;
export const ImageContainer = styled.div``;
export const InnerContainer = styled.div`
  margin: auto;
  justify-content: space-between;
  display: flex;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Heading = styled.h1`
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 0px;
  color: ${colors.black};
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0px;
  color: ${colors.primary01};
`;
export const ButtonText = styled.p`
  font-size: 18px;
  line-height: 150%;
  color: ${colors.white};
`;
export const ButtonSmallText = styled.span`
  font-size: 16px;
  line-height: 150%;
  color: ${colors.secondary02};
`;
