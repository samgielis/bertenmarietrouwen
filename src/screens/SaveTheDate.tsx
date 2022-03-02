import { VStack, Heading, Text, Box, Center } from "@chakra-ui/react"
import { SubscribeEmail } from "../components/SubscribeEmail"
import { DualScreen } from "../layouts/DualScreen";

export const SaveTheDate = () => {
  return <DualScreen>
    <VStack spacing={24}>
      <VStack spacing={6} letterSpacing={"1em"} textTransform={"uppercase"} >
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
      <VStack spacing={10}>
        <Heading fontWeight={"400"} letterSpacing={".3em"} size="md" textTransform={"uppercase"} fontSize={"4xl"}>
          20.08.2022
        </Heading>
        <Text textTransform={"uppercase"} fontWeight="900">
          Bert en Marie
        </Text>
      </VStack>
    </VStack>
    <Box w={"350px"}>

      <SubscribeEmail />
    </Box>
  </DualScreen>
}
