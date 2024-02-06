import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../componentes/Navbar";

export default function Home() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.100">
        <GridItem
            as="aside"
            colSpan="1"
            bg="purple.400"
            minHeight="100vh"
        >
            <span>sidebar</span>
        </GridItem>

        <GridItem
            as="main"
            colSpan="5"
            p="40px"
        >
            <Navbar/>
            <SimpleGrid columns={4} spacing={5} minChildWidth="250px">
                <Box bg="white" h="200px" border="1px solid"></Box>
                <Box bg="white" h="200px" border="1px solid"></Box>
                <Box bg="white" h="200px" border="1px solid"></Box>
                <Box bg="white" h="200px" border="1px solid"></Box>

                <Box bg="white" h="200px" border="1px solid"></Box>
                <Box bg="white" h="200px" border="1px solid"></Box>
                <Box bg="white" h="200px" border="1px solid"></Box>
                <Box bg="white" h="200px" border="1px solid"></Box>

                <Box bg="white" h="200px" border="1px solid"></Box>
                <Box bg="white" h="200px" border="1px solid"></Box>
                <Box bg="white" h="200px" border="1px solid"></Box>
                <Box bg="white" h="200px" border="1px solid"></Box>
            </SimpleGrid>
        </GridItem>
    </Grid>
  )
}
