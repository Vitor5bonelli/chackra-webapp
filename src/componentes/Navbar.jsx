import { Box, Flex, Container, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px">
        <Heading as="h1">Dojo Tasks</Heading>
        <Spacer/>

        <HStack spacing="20px">
            <Box bg="gray.200" p="10px">M</Box>
            <Text>Vitor@email.com</Text>
            <Button colorScheme="purple">Log Out</Button>
        </HStack>

    </Flex>
  )
}
