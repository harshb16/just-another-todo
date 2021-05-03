import { useState } from 'react';
import { HStack, IconButton, Input, Spacer, Text } from '@chakra-ui/react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';

const TodoItem = ({ todo, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [item, setItem] = useState(todo.todo);

  return (
    <HStack key={todo.id} m={2}>
      {!isEditing && <Text>{item}</Text>}
      {isEditing && (
        <>
          <Input
            size='sm'
            onChange={(event) => setItem(event.target.value)}
            value={item}
            borderStyle='none'
            _focus={{ borderStyle: 'none' }}
            _hover={{ borderStyle: 'none' }}
          />
          <IconButton
            icon={<FaCheck />}
            isRound='true'
            onClick={() => setIsEditing(false)}
          />
        </>
      )}
      <Spacer />
      <HStack spacing='3'>
        <IconButton
          icon={<FaEdit />}
          isRound='true'
          onClick={() => setIsEditing(true)}
        />
        <IconButton
          icon={<FaTrash />}
          isRound='true'
          onClick={() => onDelete(todo.id)}
        />
      </HStack>
    </HStack>
  );
};

export default TodoItem;
