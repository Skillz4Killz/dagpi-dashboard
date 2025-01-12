import { Box, BoxProps, chakra, Flex, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FaDiscord } from 'react-icons/fa';

function DiscordStrip(props: BoxProps) {
    return (
        <Flex bg="#7289DA" {...props} justifyContent="center">
            <Box maxW="1000px" py="8">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align="center"
                    justify="space-between">
                    <Flex color="white" mr="30px">
                        <Box fontSize="3rem">
                            <FaDiscord />
                        </Box>
                        <Box>
                            <Heading size="md" lineHeight="1.2" mb="1" color="white">
                                Official Server
                            </Heading>
                            <Text color="white">
                                Get support from experienced users, and stay up to date with the
                                latest and greatest of Dagpi
                            </Text>
                        </Box>
                    </Flex>
                    <chakra.button
                        width={{ base: '70%', md: 'auto' }}
                        mt={{ base: '6', md: 0 }}
                        color="gray.800"
                        as="a"
                        justifyContent="center"
                        display="inline-flex"
                        alignItems="center"
                        href="https://server.daggy.tech"
                        rel="noopener"
                        target="_blank"
                        fontWeight="bold"
                        shadow="md"
                        bg="white"
                        px="24px"
                        h="56px"
                        rounded="lg"
                        fontSize="md">
                        Join DaggyTech
                    </chakra.button>
                </Flex>
            </Box>
        </Flex>
    );
}

export default DiscordStrip;
