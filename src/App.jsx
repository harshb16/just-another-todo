import { useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoItems, setTodoItems] = useState(
    () => JSON.parse(localStorage.getItem('todoItems')) || []
  );

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  const addTodo = (addedTodo) => {
    setTodoItems((oldTodos) => [...oldTodos, addedTodo]);
  };

  const deleteTodo = (id) => {
    const newTodoItems = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newTodoItems);
  };

  const editTodo = (id) => {
    console.log(todoItems);
  };

  return (
    <VStack m={4} p={4} spacing={8}>
      <ColorModeSwitcher alignSelf='flex-end' />
      <Header />
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todoItems}
        onDeleteTodoItem={deleteTodo}
        onEditTodoItem={editTodo}
      />
    </VStack>
  );
}

export default App;
