import styled from "@emotion/styled";
import { ButtonVariant } from "../../types/components";
import colors from "../../styles/colors";
export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  padding: 10px 32px;
  border-radius: 29px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 150%;
  width: fit-content;
  letter-spacing: 0px;
  color: ${colors.white};
  ${({ variant }) =>
    variant === "primary" &&
    `
    background-color : ${colors.secondary03};
  `}
  ${({ variant }) =>
    variant === "secondary" &&
    `
    background : ${colors.secondary01};
  `};
`;
