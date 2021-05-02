import { Input, HStack, Button } from '@chakra-ui/react';

const TodoForm = () => {
  return (
    <form>
      <HStack spacing={4}>
        <Input
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
