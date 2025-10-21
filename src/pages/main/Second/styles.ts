import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;
