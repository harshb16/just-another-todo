import { Heading } from '@chakra-ui/layout';

const Header = () => {
  return (
    <Heading
      fontSize={{ base: 'xl', sm: '2xl', lg: '3xl', xl: '5xl' }}
      bgGradient='linear(to-r, teal.600, teal.400, teal.300, teal.400)'
      bgClip='text'
    >
      Just Another Todo
    </Heading>
  );
};

export default Header;
