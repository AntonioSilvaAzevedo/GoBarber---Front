import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import singUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh; /* forçar 100% do tamanho da tela */

  display: flex;
  align-items: stretch; /*tamanho total da pagina com 100vh*/
`;

export const Content = styled.div`
  /*place-content: center; manten ao centro*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRigth = keyframes`
  from {
    opacity; 0;
    transform: translateX(50px);

  }

  to {
    opacity: 1;
    transform: translateX(0);

  }

`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRigth} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${singUpBackgroundImg}) no-repeat center;
  background-size: cover; /* manten a img do tamanho real da pagina */
`;
