import { ButtonStyled, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant: ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return (
    <>
      <ButtonStyled variant={variant}>Enviar</ButtonStyled>
    </>
  );
}
