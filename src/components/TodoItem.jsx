import { Box, HStack, IconButton, Spacer, Text } from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoItem = ({ todo, onDelete }) => {
  return (
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
  );
};

export default TodoItem;
