import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import React, { FC, useMemo } from "react";
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  emojiIcon?: string
}

const Feature = ({ text, emojiIcon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={10} h={10} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {emojiIcon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

interface FeaturesWImageProps {}
const FeaturesWImage: FC<FeaturesWImageProps> = (props) => {
    const {} = props;
    return (
        <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
            <Text
                textTransform={'uppercase'}
                color={'purple.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('purple.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                KALEIDOSCOPIC CASCADE
            </Text>
            <Heading>Your neurons doing BACKFLIPS 🤸‍♂️</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
                <chakra.span fontWeight="bold" textDecoration="underline">AURA</chakra.span> is the DIGITAL SORCERY that UNPLUGS you from the beta matrix! 💻💨
            </Text>
            <Stack
                spacing={4}
                divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                }>
                <Feature
                emojiIcon={'🧙🏻‍♂️'}
                iconBg={useColorModeValue('blue.100', 'yellow.900')}
                text={'DIGITAL SORCERY'}
                />
                <Feature
                emojiIcon={'💣'}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'COSMIC MEME BOMB'}
                />
                <Feature
                emojiIcon={'🔥'}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'SURREAL RIZZ'}
                />
            </Stack>
            </Stack>
            <Flex>
            <Image
                rounded={'md'}
                alt={'feature image'}
                aspectRatio={4 / 4}
                src={
                    'https://images.unsplash.com/photo-1578831914933-6339766eb29b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                objectFit={'cover'}
            />
            </Flex>
        </SimpleGrid>
        </Container>
    );
    };

export default FeaturesWImage;