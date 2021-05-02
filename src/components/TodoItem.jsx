import { Box, HStack, Text, IconButton, Spacer } from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoItem = ({ todoItems }) => {
  return (
    <Box>
      {todoItems.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.todo}</Text>
          <Spacer />
          <IconButton icon={<FaEdit />} isRound='true' />
          <IconButton icon={<FaTrash />} isRound='true' />
        </HStack>
      ))}
    </Box>
  );
};

export default TodoItem;
