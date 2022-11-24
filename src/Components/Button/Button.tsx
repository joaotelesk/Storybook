import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
  cursos: poiter;
  border: 0;
  padding: 8px 14px;
  transition: 0.3s;
  ${({ theme, variant }) => {
    console.log(theme);
    return {
      backgroundColor: theme.colors[variant].main,
      color: theme.colors[variant].text,
      ":hover": {
        backgroundColor: theme.colors[variant].light,
      },
    };
  }}
`;
interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "accent";
}

export default function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
Button.defaultProps = {
  disabled: false,
  variant: "primary",
};
