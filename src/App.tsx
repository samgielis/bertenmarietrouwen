import {
  Center,
  ChakraProvider, Container, Flex
} from "@chakra-ui/react"
import { theme } from "./theme"
import { ThankYou } from "./screens/ThankYou"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex minH="100vh" justify={"center"} align={"center"}>
      <Container textAlign="center" p={5} py={20}>
        <Center>
          <ThankYou />
          {/*<AccessCodeGate>
            {<SaveTheDate />}
            {<InvitationScreen />}
          </AccessCodeGate>*/}
        </Center>
      </Container>
    </Flex >
  </ChakraProvider >
)
