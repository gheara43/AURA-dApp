import { useAppUtils } from "@/lib/app/hooks";
import Head from 'next/head'
import React, { FC, useMemo } from "react";
import { LINKS } from "@/utils/links";
import Link from "next/link";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  chakra,
} from '@chakra-ui/react'

interface HeroSectionProps {}
const HeroSection: FC<HeroSectionProps> = (props) => {
  const {} = props;
  return (
      <Container maxW={'6xl'}>
              <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                  lineHeight={'110%'}>
                  GO CRAZY with <chakra.span textDecoration="underline">AURA</chakra.span> <br />
                  <Text fontSize="4xl" fontWeight={400} as={'span'} color={'purple.400'}>
                  —the ULTIMATE BRAINROT REVOLUTION! 🤯 
                  </Text>
                </Heading>
                <Text color={'gray.500'}>
                💥 This ain’t your grandma’s crypto, nah nah nah!
                 This is the GLITCH IN THE MATRIX that’s gonna TRANSFORM your basic beta life
                  into a WILD SIGMA SPECTACLE! 💫
                </Text>
                <Stack
                  direction={'column'}
                  spacing={3}
                  align={'center'}
                  alignSelf={'center'}
                  position={'relative'}>
                  <Link href={LINKS.cw20Token("AURA-Exchange")}>
                    <Button
                      colorScheme={'#7F56D9'}
                      bg={'purple.400'}
                      px={6}
                      _hover={{
                        bg: 'purple.500',
                      }}>
                      Ascend Your Rizz
                    </Button>
                  </Link>
      
                </Stack>
              </Stack>
            </Container>
  );
};
export default HeroSection;