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
  const [error, setError] = useState("");

  const handleSignUp = () => {
    // Name validation regex
    const nameRegex = /^[A-Za-z]+$/;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!nameRegex.test(name)) {
      setError("Name should be only in letters");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password should have at least 8 characters with 1 capital letter and 1 number"
      );
      return;
    }
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
            {error && (
              <Text color="red.500" data-testid="error">
                {error}
              </Text>
            )}
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                data-testid="name"
                bg="teal.100"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                data-testid="email"
                bg="teal.100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                data-testid="password"
                bg="teal.100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              colorScheme="teal"
              data-testid="signupBtn"
              onClick={handleSignUp}
            >
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
