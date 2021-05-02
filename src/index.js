import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='system' />
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
