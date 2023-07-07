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
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

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
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      className="LoginPage"
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
          <Heading size="lg">Login Form</Heading>
          {error && (
            <Text color="red.500" data-testid="error">
              {error}
            </Text>
          )}
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              data-testid="email"
              value={email}
              bg="teal.100"
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
            data-testid="loginBtn"
            colorScheme="blue"
            onClick={handleLogin}
          >
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
