import { VStack, Heading, Text, Stack, StackDivider, useBreakpointValue, StackDirection, Box, Center } from "@chakra-ui/react"
import { SubscribeEmail } from "./SubscribeEmail"

export const SaveTheDate = () => {
  const direction: StackDirection | undefined = useBreakpointValue({ base: "column", md: "row" });
  const sectionSpacing = useBreakpointValue({ base: 10, md: 20, lg: 36 }) || 10
  return <Stack divider={<StackDivider />} direction={direction} spacing={sectionSpacing}>
    <Center>
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
    </Center>
    <Center>
      <Box w={"350px"}>

        <SubscribeEmail />
      </Box>
    </Center>
  </Stack>
}
