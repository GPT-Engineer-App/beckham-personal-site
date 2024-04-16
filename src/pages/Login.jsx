import React from "react";
import { Box, Button, Input, VStack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth_token", "your_token_here");
    navigate("/");
  };

  return (
    <Box p={8} maxW="sm" borderWidth={1} borderRadius="lg" mx="auto" mt={20}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Login
      </Heading>
      <VStack spacing={4}>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="blue" onClick={handleLogin}>
          Log In
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
