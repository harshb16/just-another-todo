import { useState } from 'react';
import { Input, HStack, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const TodoForm = ({ onAddTodo }) => {
  const [content, setContent] = useState('');
  const toast = useToast();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!content) {
      toast({
        title: 'Cannot add empty todo!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      todo: content,
    };

    onAddTodo(todo);
    setContent('');
  };

  const inputHandler = (event) => setContent(event.target.value);

  return (
    <form onSubmit={submitHandler}>
      <HStack spacing={4}>
        <Input
          value={content}
          onChange={inputHandler}
          size='lg'
          colorScheme='teal'
          variant='filled'
          placeholder='Enter new Todo'
          _hover={{ borderColor: 'teal.600' }}
          _active={{ borderColor: 'teal.600' }}
          _focus={{ borderColor: 'teal.600' }}
        />
        <Button colorScheme='teal' px={8} type='submit' size='lg'>
          Add todo
        </Button>
      </HStack>
    </form>
  );
};

export default TodoForm;
