import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard(){

    const boxStyles = {
        p: "10px",
        bg: "green.500",
        color: "white",
        m: "10px",
        textAlign: "center",
        ':hover' : {
            color: "black",
            bg: "blue.500",
            filter: "blur(2px)"
        }
    }

    return(
        <div>
            <Container as="section" > 
                <Heading my="30px" p="10px" bg="lightgray">Titulo h2 do chakra</Heading>
                <Text bold="800" color="blue.400">Nossa veio o chakar kkkkkkk</Text>
            
            
                <Box my="30px" p="20px" bg="orange">
                    <Text textAlign="left" color="white">Isto é uma caixa</Text>
                </Box>

                <Box sx={boxStyles}>
                    Whatsapp haha
                </Box>

            </Container>
        </div>
    )
}