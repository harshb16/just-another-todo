import {
  VStack,
  StackDivider,
  HStack,
  Text,
  IconButton,
  Spacer,
  Badge,
} from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoList = ({ todos, onDelete, onEdit }) => {
  if (!todos.length)
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

  return (
    <VStack
      divider={<StackDivider />}
      borderColor='teal.600'
      borderWidth='3px'
      p={3}
      borderRadius='md'
      width='100%'
      maxWidth={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      {todos.map((todo) => (
        <HStack key={todo.id} m={2}>
          <Text>{todo.todo}</Text>
          <Spacer />
          <HStack spacing='3'>
            <IconButton
              icon={<FaTrash />}
              isRound='true'
              onClick={() => onDelete(todo.id)}
            />
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
