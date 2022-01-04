import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
} from '@chakra-ui/react';

export default function SocialProfileSimple() {
  const redirectMail = () => {
    window.location.href = "mailto: altina.me@protonmail.com"
  }
  return (
    <Box height={'100vh'} alignItems={'center'} justifyContent={'center'} bg={'gray.800'}>
    <Center height="100vh" py={6}>
      <Box
        maxW={'340px'}
        minH={'410px'}
        w={'full'}
        bg={'gray.900'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://cdn.discordapp.com/attachments/839696060833333259/927837819899093022/reines.png'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'} color={'gray.200'}>
          Lint
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          Discord: Lint#2622
        </Text>
        <Text
          textAlign={'center'}
          color={'gray.400'}
          px={3}>
          <p>Probably a loli.</p>
          <Link color={'purple.300'} href='https://anilist.co/manga/86279/Kishuku-Gakkou-no-Juliet'>Juliet, </Link>
          <Link color={'purple.300'} href='https://anilist.co/manga/98361/Mikkakan-no-Koufuku'>Happiness, </Link> and
          <Link color={'purple.300'} href='https://anilist.co/anime/108465/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu'> Reincarnation</Link>        
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'gray.700'}
            color={'gray.200'}
            _hover={{
              bg: 'gray.600',
            }}
            onClick={redirectMail}>
            Mail
          </Button>
        </Stack>
      </Box>
    </Center>
    </Box>
  );
}