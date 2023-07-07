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

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
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
            <Heading size="lg">Sign Up</Heading>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                bg="teal.100"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                bg="teal.100"
                value={email}
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
            <Button colorScheme="teal" onClick={handleSignUp}>
              Sign Up
            </Button>
            <Text color={"whiteAlpha.900"}>
              Click!{" "}
              <Link to="/login" style={{ color: "pink" }}>
                Login
              </Link>{" "}
              if you already have an account.
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default SignUpPage;
