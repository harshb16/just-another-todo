import TodoItem from './TodoItem';
import { Box } from '@chakra-ui/react';

const TodoItems = ({ todoItems, onDeleteTodo }) => {
  return (
    <>
      {todoItems.map((todoItem) => (
        <Box
          borderColor='teal.600'
          borderWidth='3px'
          m={2}
          px={2}
          py={1}
          borderRadius='7px'
          key={todoItem.id}
        >
          <TodoItem onDelete={onDeleteTodo} todo={todoItem} />
        </Box>
      ))}
    </>
  );
};

export default TodoItems;
