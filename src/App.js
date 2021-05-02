import React from 'react';
import { Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <Box textAlign='center' fontSize='xl'>
      <ColorModeSwitcher justifySelf='flex-end' />
    </Box>
  );
}

export default App;
