import { Flex } from '@chakra-ui/react';
import NoTodos from './NoTodos';
import TodoItems from './TodoItems';

const TodoList = ({ todos, onDeleteTodoItem }) => {
  if (!todos.length) return <NoTodos />;

  return (
    <Flex
      direction='column'
      p={3}
      borderRadius='md'
      width='100%'
      maxWidth={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      <TodoItems onDeleteTodo={onDeleteTodoItem} todoItems={todos} />
    </Flex>
  );
};

export default TodoList;
