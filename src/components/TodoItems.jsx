import TodoItem from './TodoItem';
import { Box } from '@chakra-ui/react';

const TodoItems = ({ todoItems, onDeleteTodo }) => {
  return (
    <>
      {todoItems.map((todoItem) => (
        <Box
          borderColor='teal.600'
          borderWidth='2px'
          m={2}
          px={2}
          py={0.5}
          borderRadius='5px'
          key={todoItem.id}
        >
          <TodoItem onDelete={onDeleteTodo} todo={todoItem} />
        </Box>
      ))}
    </>
  );
};

export default TodoItems;
