import { Heading } from '@chakra-ui/layout';

const Header = () => {
  return (
    <Heading
      fontSize={{ base: 'xl', sm: '2xl', lg: '3xl', xl: '4xl' }}
      bgGradient='linear(to-r, teal.500, teal.400, teal.300, teal.200, teal.300, teal.400, teal.500)'
      bgClip='text'
    >
      Just Another Todo
    </Heading>
  );
};

export default Header;
