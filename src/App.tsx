import {
  Center,
  ChakraProvider, Container, Flex,
} from "@chakra-ui/react"
import { theme } from "./theme"
import { SaveTheDate } from "./components/SaveTheDate"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex minH="100vh" justify={"center"} align={"center"}>
      <Container textAlign="center" p={5} py={10}>
        <Center>
          <SaveTheDate />
        </Center>
      </Container>
    </Flex>
  </ChakraProvider>
)
