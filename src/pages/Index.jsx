import React from "react";
import { Box, Heading, Text, Image, Flex, Stack, Link, Icon, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="gray.100" py={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          David Beckham
        </Heading>
        <Text fontSize="xl" textAlign="center" mt={2}>
          Football Legend & Global Icon
        </Text>
      </Box>

      {/* About Section */}
      <Box maxW="3xl" mx="auto" py={12} px={6}>
        <Flex alignItems="center" direction={{ base: "column", md: "row" }}>
          <Image src="https://images.unsplash.com/photo-1601887389937-0b02c26b602c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEYXZpZCUyMEJlY2toYW0lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMxMjQ1Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="David Beckham" borderRadius="full" boxSize="200px" objectFit="cover" mr={{ md: 8 }} mb={{ base: 6, md: 0 }} />
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg">I am an English former professional footballer, the current president & co-owner of Inter Miami CF and co-owner of Salford City. I played for Manchester United, Preston North End, Real Madrid, Milan, LA Galaxy, Paris Saint-Germain and the England national team, for which I held the appearance record for an outfield player until 2016.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Achievements Section */}
      <Box bg="gray.100" py={12}>
        <Box maxW="3xl" mx="auto" px={6}>
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Achievements
          </Heading>
          <Stack spacing={8}>
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Manchester United
              </Heading>
              <Text fontSize="lg">6x Premier League titles</Text>
              <Text fontSize="lg">2x FA Cups</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Real Madrid
              </Heading>
              <Text fontSize="lg">1x La Liga title</Text>
              <Text fontSize="lg">1x Supercopa de España</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                England National Team
              </Heading>
              <Text fontSize="lg">115 caps (record for an outfield player)</Text>
              <Text fontSize="lg">59 as captain</Text>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" py={8} px={6}>
        {localStorage.getItem("auth_token") ? <LogoutButton /> : <Navigate to="/login" />}
        <Flex maxW="3xl" mx="auto" px={6} justifyContent="center" alignItems="center">
          <Link href="#" mr={6}>
            <Icon as={FaFacebook} color="white" boxSize={6} />
          </Link>
          <Link href="#" mr={6}>
            <Icon as={FaTwitter} color="white" boxSize={6} />
          </Link>
          <Link href="#">
            <Icon as={FaInstagram} color="white" boxSize={6} />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
