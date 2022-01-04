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
import React from 'react';
import Head from "next/head"

export default function SocialProfileSimple() {
  const redirectMail = () => {
    window.location.href = "mailto: altina.me@protonmail.com"
  }
  return (
    <React.Fragment>
    <Head>
    <title>Altina</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <Box bg={'gray.800'}>
    <Center height="100vh">
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
            'https://cdn.discordapp.com/attachments/839696060833333259/927935319750377482/kyaru.png'
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
          <Link color={'blue.300'} href='https://anilist.co/manga/86279/Kishuku-Gakkou-no-Juliet'>Juliet, </Link>
          <Link color={'blue.300'} href='https://anilist.co/manga/98361/Mikkakan-no-Koufuku'>Happiness, </Link> and
          <Link color={'blue.300'} href='https://anilist.co/anime/108465/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu'> Reincarnation</Link>        
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            colorScheme={'blue'}
            flex ={1}
            onClick={redirectMail}>
            Harass Me!
          </Button>
        </Stack>
      </Box>
    </Center>
    </Box>
    </React.Fragment>
  );
}