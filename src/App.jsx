import { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = (addedTodo) => {
    setTodoItems((oldTodos) => [...oldTodos, addedTodo]);
  };

  const deleteTodo = (id) => {
    const newTodoItems = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newTodoItems);
  };

  return (
    <VStack m={4} p={4} spacing={8}>
      <ColorModeSwitcher alignSelf='flex-end' />
      <Header />
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todoItems} onDelete={deleteTodo} />
    </VStack>
  );
}

export default App;