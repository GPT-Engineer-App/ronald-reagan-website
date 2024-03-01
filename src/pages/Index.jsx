import { Box, Container, Heading, Text, VStack, Image, Stack, Divider, Link, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} as="section" alignItems="flex-start">
        <Heading size="2xl">Ronald Reagan</Heading>
        <Text as="p" fontSize="lg" colorScheme="gray">
          Former President, Actor, and Public Speaker
        </Text>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1580128637392-35b81ba47467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSb25hbGQlMjBSZWFnYW58ZW58MHx8fHwxNzA5Mjc2NDQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Ronald Reagan" />
        <Text as="p">Ronald Reagan served as the 40th president of the United States from 1981 to 1989. An icon of the conservative movement, Reagan started his career as an actor before serving as the governor of California and ultimately becoming the president.</Text>
      </VStack>
      <Divider my={6} />
      <VStack spacing={4} as="section" alignItems="flex-start">
        <Heading size="lg">About</Heading>
        <Text as="p">With a storied career spanning several decades, Ronald Reagan was a man of diverse talents and achievements. From the silver screen to the political arena, Reagan was a charismatic figure known for his eloquent speeches and unwavering commitment to his principles.</Text>
      </VStack>
      <Divider my={6} />
      <VStack spacing={4} as="section" alignItems="flex-start">
        <Heading size="lg">Connect</Heading>
        <Stack direction="row" spacing={4}>
          <IconButton icon={<FaTwitter />} aria-label="Twitter" />
          <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
          <IconButton icon={<FaGithub />} aria-label="GitHub" />
          <IconButton icon={<FaEnvelope />} aria-label="Email" />
        </Stack>
      </VStack>
      <Divider my={6} />
      <Box as="footer" py={6} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Ronald Reagan. All rights reserved.</Text>
        <Text>Website created with love and respect for the legacy of Ronald Reagan.</Text>
      </Box>
    </Container>
  );
};

export default Index;
