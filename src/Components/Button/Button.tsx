interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
Button.defaultProps = {
  disabled: false,
};
