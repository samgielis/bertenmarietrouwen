import {
  Center,
  ChakraProvider, Container, Flex,
} from "@chakra-ui/react"
import { theme } from "./theme"
import { SaveTheDate } from "./components/SaveTheDate"
import { AccessCodeGate } from "./components/AccessCodeGate"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex minH="100vh" justify={"center"} align={"center"}>
      <Container textAlign="center" p={5} py={10}>
        <Center>
          <AccessCodeGate>
            <SaveTheDate />
          </AccessCodeGate>
        </Center>
      </Container>
    </Flex>
  </ChakraProvider>
)
