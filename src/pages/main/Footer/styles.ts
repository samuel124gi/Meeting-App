import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -100px;
  z-index: 11;
`;
export const Line = styled.div`
  width: 1px;
  height: 80px;
  background: ${colors.primary02};
`;
export const Circle = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  border: 1px solid ${colors.primary01};
  font-size: 16px;
  font-weight: bold;
  line-height: 150%;
  border-radius: 50%;
  color: ${colors.primary01};
  justify-content: center;
  align-items: center;
  background: ${colors.white};
`;
export const MainContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  background: rgba(56, 215, 255, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;
export const InnerContainer = styled.div`
  display: flex;
  width: 1100px;
  max-width: 1100px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  z-index: 11;
  position: absolute;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 110%;
  color: ${colors.white};
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 150%;
  color: ${colors.white};
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
