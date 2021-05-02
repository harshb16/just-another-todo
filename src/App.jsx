import { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const todos = [
    {
      id: '1',
      todo: 'Test1',
    },
    {
      id: '2',
      todo: 'Test2',
    },
    {
      id: '3',
      todo: 'Test3',
    },
    {
      id: '4',
      todo: 'Test4',
    },
  ];
  const [todoItems, setTodoItems] = useState(todos);

  const deleteTodo = (id) => {
    const newTodoItems = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newTodoItems);
  };

  return (
    <VStack m={4} p={4} spacing={8}>
      <ColorModeSwitcher alignSelf='flex-end' />
      <Header />
      <TodoForm />
      <TodoList todos={todoItems} onDelete={deleteTodo} />
    </VStack>
  );
}

export default App;
