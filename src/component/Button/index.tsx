import { ButtonVariant } from "../../types/components";
import { StyledButton } from "./styles";

interface buttonProps {
  variant: ButtonVariant;
  label?: string;
  children?: React.ReactNode;
}

const Button = ({ label, children, variant }: buttonProps) => {
  return <StyledButton variant={variant}> {label || children}</StyledButton>;
};

export default Button;
