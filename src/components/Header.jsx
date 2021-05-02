import { Heading } from '@chakra-ui/layout';

const Header = () => {
  return (
    <Heading
      size='2xl'
      bgGradient='linear(to-r, teal.500, teal.400, teal.300, teal.200, teal.300, teal.400, teal.500)'
      bgClip='text'
    >
      Just Another Todo
    </Heading>
  );
};

export default Header;
