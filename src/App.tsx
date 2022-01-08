import {
  ChakraProvider,
} from "@chakra-ui/react"
import { theme } from "./theme"
import { SaveTheDate } from "./components/SaveTheDate"

export const App = () => (
  <ChakraProvider theme={theme}>
    <SaveTheDate/>
  </ChakraProvider>
)
