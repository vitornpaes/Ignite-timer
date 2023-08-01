import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme["gray-100"]};
      box-shadow: none;

      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent; // borda transparente em cima e baixo, para que o botao ser jogado para cima, quando a borda do hover aparecer.

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};;
      }

      &.active {
        color: ${(props) => props.theme["green-500"]};;
      }
    }
  }
`;
