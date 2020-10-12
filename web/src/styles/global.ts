import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root{
    --color-font-default: #fff;
    --color-bcg-default: #ebf2f5;
    font-size: 62.5%;
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body, input, button, textarea{
    font: 600 1.8rem Nunito, sans-serif;
  }

  body{
    background: var(--color-bcg-default);
    color: var(--color-font-default);
  }

  button,a{
    cursor:pointer;
  }

`;
