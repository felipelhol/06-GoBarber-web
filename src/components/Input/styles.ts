import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  /*
  trocar a borda e a cor do input qnd selecionar ou nao pelo boolean
  */
  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}


  /*
  Acessar as propriedades do componente pelo input e qnd a prop isfocused estiver true
  colocaremos uma prop a mais
  */

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
      /* nao sera mantido o border color pra qnd estiver preenchido os isfilled mantiver laranja */
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
`;
