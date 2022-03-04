import {
  Center,
  ChakraProvider, Container, Flex
} from "@chakra-ui/react"
import { theme } from "./theme"
import { AccessCodeGate } from "./components/AccessCodeGate"
import { InvitationScreen } from "./screens/InvitationScreen"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex minH="100vh" justify={"center"} align={"center"}>
      <Container textAlign="center" p={5} py={20}>
        <Center>
          <AccessCodeGate>
            {/*<SaveTheDate />*/}
            <InvitationScreen />
          </AccessCodeGate>
        </Center>
      </Container>
    </Flex>
  </ChakraProvider>
)
