import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const MainContainer = styled.div`
  display: grid;
  width: 1100px;
  max-width: 1100px;
  margin: 0px auto;
  grid-template-columns: repeat(4, 1fr);
`;

export const ImageContainer = styled.div`
  width: 256px;
  height: 256px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Heading = styled.h1`
  font-size: 24px;
  line-height: 120%;
  font-weight: bolder;
  color: ${colors.black};
`;
