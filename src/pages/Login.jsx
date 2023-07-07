import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius="md"
        boxShadow="lg"
        bg="teal.500"
      >
        <VStack spacing={4}>
          <Heading size="lg">Login</Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              bg="teal.100"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              bg="teal.100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
          <Text color={"whiteAlpha.900"}>
            Click!{" "}
            <Link to="/signup" style={{ color: "pink" }}>
              SignUp
            </Link>{" "}
            if you haven't an account.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default LoginPage;
