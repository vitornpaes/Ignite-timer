import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonStyledProps {
  variant: ButtonVariant;
}

const ButtonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 100px;
  height: 40px;
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${ButtonVariants[props.variant]};
    `;
  }} */
`;
