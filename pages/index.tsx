import {
    Box,
    BoxProps,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { AiFillHeart, AiOutlineUser } from 'react-icons/ai';
import { BiCodeCurly, BiTime } from 'react-icons/bi';
import { BsLightningFill } from 'react-icons/bs';
import { DiGithubBadge } from 'react-icons/di';
import { FaArrowRight, FaDiscord } from 'react-icons/fa';
import { IoIosSpeedometer } from 'react-icons/io';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { SiReadthedocs } from 'react-icons/si';
import { TiSpanner } from 'react-icons/ti';
import Particles from 'react-tsparticles';

import Cards from '../components/cards/cards';
import DiscordStrip from '../components/discord';
import Layout from '../components/layout';
import Rounder from '../components/rounder';
import styles from '../styles/feature.module.scss';
import textstyle from '../styles/gradient.module.scss';

type StatBoxProps = BoxProps & {
    icon?: React.ElementType;
    title: string;
    description: string;
};

const Feature = ({ title, icon, children, ...props }) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.700')}
            rounded="12px"
            shadow="base"
            p="40px"
            className={styles.feature}
            {...props}>
            <Flex rounded="full" w="12" h="12" bg="purple.300" align="center" justify="center">
                <Icon fontSize="24px" color="white" as={icon} />
            </Flex>
            <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
                {title}
            </Heading>
            <Text fontSize="lg" opacity={0.7}>
                {children}
            </Text>
        </Box>
    );
};

const StatBox = (props: StatBoxProps) => {
    const { icon: StatIcon, title, description, ...rest } = props;
    return (
        <Flex
            direction="column"
            align={{ base: 'center', md: 'flex-start' }}
            pl={{ base: 0, md: '8' }}
            borderLeft="2px solid"
            borderLeftColor="white"
            mr={{ base: '0px', lg: '40px' }}
            {...rest}>
            <Box fontSize={{ base: '4rem', md: '6.25rem' }} lineHeight="1em" mb="20px">
                {title}
            </Box>
            <Stack isInline align="center">
                <StatIcon size="24px" />
                <Text>{description}</Text>
            </Stack>
        </Flex>
    );
};

export default function Page() {
    const mobile = useBreakpointValue({ base: true, sm: true, lg: false, xl: false });
    const partcolor = useColorModeValue('#CBD5E0', '#4A5568');
    return (
        <>
            <Layout>
                <Head>
                    <title>Dagpi</title>
                    <meta property="og:title" content="Dagpi" key="title" />
                </Head>
                <Flex
                    maxW="760px"
                    mx="auto"
                    mt="100px"
                    align="center"
                    justify="center"
                    direction="column"
                    textAlign="center">
                    <Heading
                        size="3xl"
                        letterSpacing="tight"
                        fontWeight="bold"
                        mb="16px"
                        lineHeight="1.2">
                        A
                        <Box
                            as="span"
                            backgroundColor="#1fd1f9"
                            backgroundImage="linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)"
                            className={textstyle.text}>
                            {' '}
                            Powerful and Fast{' '}
                        </Box>
                        API that can do amazing things
                    </Heading>

                    <Text opacity={0.7} fontSize={{ base: 'lg', lg: 'xl' }} mt="6">
                        Built with a variety of languages to maximise performance, Dagpi is fast and
                        reliable
                    </Text>

                    <Stack
                        mt="10"
                        spacing="4"
                        justify="center"
                        direction={{ base: 'column', sm: 'row' }}>
                        <Link href="/dashboard">
                            <Button
                                h="4rem"
                                px="40px"
                                fontSize="1.2rem"
                                size="lg"
                                colorScheme="purple"
                                rightIcon={<FaArrowRight fontSize="0.8em" />}>
                                Get Started
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            ml={{ base: '0px', sm: '20px' }}
                            h="4rem"
                            as="a"
                            px="40px"
                            href="https://dagpi.docs.apiary.io"
                            fontSize="1.2rem"
                            leftIcon={<SiReadthedocs size="1.5em" />}>
                            Docs
                        </Button>
                    </Stack>
                </Flex>
                <Box
                    as="section"
                    pb="50px"
                    mt="200px"
                    bg={useColorModeValue('gray.50', 'gray.600')}>
                    <Container py="120px" maxW="1280px">
                        <Box maxW="760px" mx="auto" textAlign="center" mb="56px">
                            <Heading as="h2" mb="5" pt="5">
                                All the characteristics of a Modern API
                            </Heading>
                        </Box>
                        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} spacingX={{ md: 12 }}>
                            <Feature icon={BsLightningFill} title="Fast">
                                Dagpi is lightning quick, using the fasted web development framework
                                available
                            </Feature>
                            <Feature icon={RiSecurePaymentLine} title="Secure">
                                Cloudflare HTTPS is used for top-tier, industry standard security
                            </Feature>
                            <Feature icon={TiSpanner} title="Easy to Use">
                                With plenty of documentation, Dagpi is a breeze to implement
                            </Feature>
                            <Feature icon={DiGithubBadge} title="Open Source">
                                All source code is publicly available for viewing and contributions{' '}
                                <Text color="pink.500">
                                    <AiFillHeart />
                                </Text>
                            </Feature>
                            <Feature icon={BiCodeCurly} title="Wrappers in Major Languages">
                                API wrappers are provided in numerous major languages for user
                                convenience
                            </Feature>
                            <Feature icon={FaDiscord} title="Active Community">
                                Dagpi boasts an active community on Discord that&apos;s always
                                willing to lend a hand
                            </Feature>
                        </SimpleGrid>
                    </Container>
                </Box>
                <Box mt="100px" textAlign="center" alignItems="center">
                    <Heading>Features</Heading>
                    <Rounder />
                </Box>
                {!mobile ? (
                    <div className={styles.container}>
                        <Particles
                            id="tsparticles"
                            options={{
                                background: {
                                    color: {
                                        value: partcolor
                                    }
                                },
                                fpsLimit: 60,
                                interactivity: {
                                    detectsOn: 'canvas',
                                    events: {
                                        onClick: {
                                            enable: true,
                                            mode: 'push'
                                        },
                                        onHover: {
                                            enable: true,
                                            mode: 'repulse'
                                        },
                                        resize: true
                                    },
                                    modes: {
                                        bubble: {
                                            distance: 400,
                                            duration: 2,
                                            opacity: 0.8,
                                            size: 40
                                        },
                                        push: {
                                            quantity: 4
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4
                                        }
                                    }
                                },
                                particles: {
                                    collisions: {
                                        enable: true
                                    },
                                    move: {
                                        direction: 'none',
                                        enable: true,
                                        outMode: 'bounce',
                                        random: false,
                                        speed: 6,
                                        straight: false
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            value_area: 800
                                        },
                                        value: 60
                                    },
                                    opacity: {
                                        value: 0.4
                                    },
                                    shape: {
                                        image: [
                                            {
                                                height: 500,
                                                width: 500,
                                                src: '/Tech/docker.png'
                                            },
                                            {
                                                height: 500,
                                                width: 500,
                                                src: '/Tech/python.png'
                                            },
                                            {
                                                height: 500,
                                                width: 500,
                                                src: '/Tech/rust.png'
                                            },
                                            {
                                                height: 500,
                                                width: 500,
                                                src: '/Tech/react.png'
                                            },
                                            {
                                                height: 500,
                                                width: 500,
                                                src: '/Tech/postgres.png'
                                            },
                                            {
                                                height: 500,
                                                width: 500,
                                                src: '/Tech/scsssvg.svg'
                                            },
                                            {
                                                height: 500,
                                                width: 500,
                                                src: '/Tech/ts.png'
                                            },
                                            {
                                                height: 500,
                                                width: 500,
                                                src: '/Tech/denosvg.svg'
                                            }
                                        ],
                                        type: 'image'
                                    },
                                    size: {
                                        value: 50
                                    }
                                },
                                detectRetina: true
                            }}
                        />
                        <Heading
                            size="2xl"
                            color={useColorModeValue('black', 'white')}
                            className={styles.containerText}>
                            Powered by the Technology of the Future
                        </Heading>
                    </div>
                ) : (
                    <br />
                )}
                <Flex
                    justifyContent="center"
                    mt="100px"
                    as="section"
                    bg={useColorModeValue('purple.600', 'purple.900')}>
                    <Box py="7.5rem" maxW="1280px" color="white">
                        <Box maxW="760px" mx="auto" textAlign="center" mb="56px">
                            <Heading as="h3" size="2xl" textStyle="heading" mb="5">
                                The Numbers
                            </Heading>
                        </Box>
                        <Stack direction={{ base: 'column', lg: 'row' }}>
                            <StatBox icon={AiOutlineUser} title="100+" description="Active Users" />
                            <StatBox icon={IoIosSpeedometer} title="<50ms" description="Ping" />
                            <StatBox icon={BiTime} title="99%" description="Uptime" />
                            <StatBox icon={FaDiscord} title="120+" description="Discord Members" />
                        </Stack>
                    </Box>
                </Flex>
                <Box maxW="760px" mt="200px" mx="auto" textAlign="center" mb="56px">
                    <Heading as="h3" size="2xl" textStyle="heading" mb="5">
                        API Wrappers
                    </Heading>
                </Box>
                <Cards />
                <DiscordStrip mt="100px" />
            </Layout>
        </>
    );
}
