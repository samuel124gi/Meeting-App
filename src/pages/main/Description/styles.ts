import styled from "@emotion/styled";
import colors from "../../../styles/colors";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0px;
  color: ${colors.secondary03};
`;
export const Heading = styled.h1`
  font-size: 40px;
  line-height: 110%;
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
