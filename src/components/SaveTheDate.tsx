import { Flex, Container, VStack, Heading, Text } from "@chakra-ui/react"

export const SaveTheDate = () => {
    return <Flex h="100vh" justify={"center"} align={"center"}>
      
    <Container textAlign="center">
        <VStack spacing={32}>
          <VStack  spacing={6} letterSpacing={"1em"} textTransform={"uppercase"} >
            <Heading fontWeight={"400"} size={"4xl"}>
              Save
            </Heading>
            <Heading fontWeight={"400"} size={"lg"} fontStyle={"italic"}>
              the
            </Heading>
            <Heading fontWeight={"400"} size={"4xl"}>
              date
            </Heading>
          </VStack>
          <VStack spacing={12}>
            <Heading fontWeight={"400"}  letterSpacing={".3em"} size="md" textTransform={"uppercase"} fontSize={"4xl"}>
              20.08.2022
            </Heading>
            <Text textTransform={"uppercase"} fontWeight="900">
              Bert en Marie
            </Text>
          </VStack>
        </VStack>
    </Container>
    </Flex>
}
