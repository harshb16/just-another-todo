import {
  VStack,
  StackDivider,
  HStack,
  Text,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoList = ({ todos }) => {
  return (
    <VStack
      divider={<StackDivider />}
      borderColor='grey.200'
      borderWidth='2px'
      p={4}
      borderRadius='md'
      width='100%'
      maxWidth={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.todo}</Text>
          <Spacer />
          <HStack spacing='8'>
            <IconButton icon={<FaEdit />} isRound='true' />
            <IconButton icon={<FaTrash />} isRound='true' />
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
