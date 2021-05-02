import React from 'react';
import { VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const todoItems = [
    {
      id: '1',
      todo: 'Test1',
    },
    {
      id: '2',
      todo: 'Test2',
    },
    {
      id: '2',
      todo: 'Test2',
    },
    {
      id: '2',
      todo: 'Test2',
    },
  ];
  return (
    <VStack m={4} p={4} spacing={8}>
      <ColorModeSwitcher alignSelf='flex-end' />
      <Header />
      <TodoForm />
      <TodoList todos={todoItems} />
    </VStack>
  );
}

export default App;
