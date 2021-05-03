import { Badge } from '@chakra-ui/react';

const NoTodos = () => {
  return (
    <Badge
      colorScheme='teal'
      variant='subtle'
      p={4}
      m={4}
      fontSize='2xl'
      borderRadius='md'
    >
      No Todos
    </Badge>
  );
};

export default NoTodos;
